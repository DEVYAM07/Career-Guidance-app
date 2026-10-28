# Level Up — Career Guidance Web App for Class 10 Students

A modern React application designed specifically for Class 10 students to explore careers, understand post-10th stream selection (Science, Commerce, Arts), prepare for crucial competitive entrance exams, and access verified free resources.

## 🚀 Features

- **Strict UI Reproduction**: Custom retro-modern dark theme (`#14123b`), signature yellow *"Level Up"* badge, rounded search bar, and colorful preset career chips.
- **Fixed LLM Prompt Integration**: Automatically substitutes `{CAREER_NAME}` into a structured system prompt template for predictable, high-quality counseling.
- **Google Gemini API Support**: Optionally connect your Google Gemini API key via the in-app settings modal for real-time AI roadmap generation.
- **Zero-Setup Expert Knowledge Base**: Complete offline roadmaps for all 10 preset careers and dynamic roadmaps for any custom career if no API key is provided.
- **Class 10 Focused Roadmap**:
  - **11th & 12th Stream Guidance**: Subject choices (PCM, PCB, Commerce with/without Math, Humanities) and strategic advice.
  - **Action Items Checklist**: Immediate concrete habits, mini-projects, and foundational study steps.
  - **Exams to Crack**: School Olympiads, 12th college entrances (JEE, NEET, CLAT, CUET, etc.), and professional credentials.
  - **4-Phase Journey**: Structured milestones from Class 10 to entering the industry.
  - **Free Resources**: Handpicked YouTube channels and free learning portals.
- **Prompt Inspector**: View and copy the exact fixed prompt sent to the LLM.

## 🛠️ Tech Stack

- **React 18** (Vite)
- **Tailwind CSS**
- **Lucide React** (Icons)
- **Canvas Confetti**

## 💻 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🔑 Environment Variables (Optional)

Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
*(You can also configure the key directly in the app via the in-app Settings modal)*

