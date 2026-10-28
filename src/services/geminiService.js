import { PRESET_ROADMAPS, generateDynamicRoadmap } from '../data/presetCareers';

export const FIXED_PROMPT_TEMPLATE = `You are an elite career counselor and mentor advising a Class 10 student who wants to become a "{CAREER_NAME}".
Your goal is to provide a clear, realistic, and highly motivating step-by-step roadmap specifically tailored for students currently in or passing Class 10.

Provide the response STRICTLY as valid JSON matching this schema (do NOT include markdown backticks or introductory words, output raw JSON only):
{
  "career": "{CAREER_NAME}",
  "tagline": "A punchy, inspiring 1-line summary of this career (e.g. 'Heal lives and master medical science')",
  "streamRecommendation": {
    "stream": "Exact stream name (e.g. Science PCM, Science PCB, Commerce with Math, Arts/Humanities)",
    "mandatorySubjects": ["Subject 1", "Subject 2", "Subject 3"],
    "optionalSubjects": ["Subject A", "Subject B"],
    "advice": "Specific tactical advice on why this stream and what to be careful about"
  },
  "immediateActions": [
    {
      "title": "Specific action item for Class 10",
      "desc": "Concrete details of what they can do right now (skills, habits, mini-projects)",
      "badge": "Category like Academic / Skill / Mindset / Project / Tool"
    }
  ],
  "examsToCrack": [
    {
      "name": "Exam Name (e.g. JEE, NEET, CLAT, CUET, NDA, NID)",
      "stage": "When to take it (e.g. Class 10/11, After Class 12, During College)",
      "importance": "Critical / Essential / Recommended",
      "details": "What it tests and why it matters"
    }
  ],
  "timelineMilestones": [
    {
      "phase": "Phase 1: Class 10 & 11 (Foundations)",
      "period": "Age 15 - 17",
      "focus": "Key milestone objectives and syllabus focus"
    },
    {
      "phase": "Phase 2: Class 12 & Entrance Prep",
      "period": "Age 17 - 18",
      "focus": "Board exam balance and competitive entrance mock exams"
    },
    {
      "phase": "Phase 3: Undergraduate Degree / Training",
      "period": "3 - 5 Years",
      "focus": "College journey, practical skill building, and internships"
    },
    {
      "phase": "Phase 4: Industry Launch / Licensing",
      "period": "Career Launch",
      "focus": "First jobs, certifications, and long-term trajectory"
    }
  ],
  "freeResources": {
    "youtube": [
      {
        "name": "Channel or Course Name",
        "url": "https://youtube.com/...",
        "description": "What this channel covers and why 10th/11th students should watch it"
      }
    ],
    "websites": [
      {
        "name": "Website or Platform Name",
        "url": "https://...",
        "description": "Free courses, tools, or official portals"
      }
    ]
  },
  "proTips": [
    "Crucial insider advice or common mistake to avoid in 10th/11th grade"
  ]
}`;

export function getPopulatedPrompt(careerName) {
  const sanitized = careerName.trim();
  return FIXED_PROMPT_TEMPLATE.replace(/\{CAREER_NAME\}/g, sanitized);
}

function cleanJsonString(str) {
  let cleaned = str.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.slice(7);
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.slice(3);
  }
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.slice(0, -3);
  }
  return cleaned.trim();
}

/**
 * Fetch career roadmap by invoking the LLM with the fixed template prompt,
 * with graceful fallback to preset/dynamic expert knowledge base.
 */
export async function fetchCareerRoadmap(careerName, customApiKey = null) {
  const normalized = careerName.trim().toLowerCase();
  const prompt = getPopulatedPrompt(careerName);

  const apiKey = 
    customApiKey || 
    localStorage.getItem('levelup_gemini_api_key') || 
    import.meta.env.VITE_GEMINI_API_KEY;

  // If no API key is set, use the rich built-in roadmap directly
  if (!apiKey) {
    // Artificial small delay for realistic UX transition
    await new Promise((res) => setTimeout(res, 600));
    
    // Check preset roadmaps
    const presetKey = Object.keys(PRESET_ROADMAPS).find(
      (k) => k === normalized || PRESET_ROADMAPS[k].career.toLowerCase().includes(normalized)
    );
    if (presetKey) {
      return {
        data: PRESET_ROADMAPS[presetKey],
        source: 'preset',
        promptUsed: prompt
      };
    }
    return {
      data: generateDynamicRoadmap(careerName),
      source: 'smart-engine',
      promptUsed: prompt
    };
  }

  // If API key is present, invoke Gemini API
  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 2048,
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.warn("Gemini API call failed, falling back to smart engine:", errBody);
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const result = await response.json();
    const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      throw new Error("Empty response received from LLM");
    }

    const parsed = JSON.parse(cleanJsonString(rawText));
    return {
      data: parsed,
      source: 'gemini-llm',
      promptUsed: prompt
    };
  } catch (error) {
    console.warn("LLM generation encountered an issue, serving fallback roadmap:", error);
    // Graceful fallback so student is never stranded with an error screen
    const presetKey = Object.keys(PRESET_ROADMAPS).find(
      (k) => k === normalized || PRESET_ROADMAPS[k].career.toLowerCase().includes(normalized)
    );
    if (presetKey) {
      return {
        data: PRESET_ROADMAPS[presetKey],
        source: 'preset-fallback',
        promptUsed: prompt,
        error: error.message
      };
    }
    return {
      data: generateDynamicRoadmap(careerName),
      source: 'smart-engine-fallback',
      promptUsed: prompt,
      error: error.message
    };
  }
}

