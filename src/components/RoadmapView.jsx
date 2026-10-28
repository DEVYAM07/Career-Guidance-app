import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Award, 
  Calendar, 
  Youtube, 
  Globe, 
  Lightbulb, 
  CheckCircle2, 
  Circle,
  Copy,
  Check,
  Share2,
  Terminal,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RoadmapView({ roadmap, source, promptUsed, onBack, onOpenPrompt }) {
  const [copied, setCopied] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState({});

  useEffect(() => {
    // Subtle celebratory confetti on initial roadmap reveal
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ffd21f', '#2ce6a6', '#ff9acb', '#a0b2ff', '#ff3d8b']
      });
    } catch (e) {
      // Ignore if canvas-confetti is not loaded
    }
  }, []);

  const toggleTask = (index) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleCopySummary = () => {
    const text = `🚀 Career Roadmap for ${roadmap.career}\n\nStream: ${roadmap.streamRecommendation?.stream}\n\nKey Exams: ${roadmap.examsToCrack?.map(e => e.name).join(', ')}\n\nGenerated with Level Up App`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-6 sm:py-10 text-white animate-fadeIn">
      {/* Top Bar Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#231e54] hover:bg-[#2e286e] text-white text-sm font-semibold border border-[#3b357a] transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 text-[#ffd21f]" />
          <span>Search another career</span>
        </button>

        <div className="flex items-center gap-2">
          {source && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#231e54] text-[#2ce6a6] border border-[#2ce6a6]/30">
              <Sparkles className="w-3 h-3" />
              {source.includes('gemini') ? 'Gemini 1.5 Flash' : 'Expert Knowledge Base'}
            </span>
          )}

          <button
            onClick={onOpenPrompt}
            title="Inspect Prompt"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#231e54] hover:bg-[#2e286e] text-xs font-semibold text-[#dedbf7] border border-[#3b357a] transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-[#2ce6a6]" />
            <span className="hidden sm:inline">View LLM Prompt</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#231e54] hover:bg-[#2e286e] text-xs font-semibold text-[#dedbf7] border border-[#3b357a] transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#2ce6a6]" /> : <Copy className="w-3.5 h-3.5 text-[#a0b2ff]" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Main Career Hero Header */}
      <div className="bg-[#1c194a] border border-[#332e6a] rounded-3xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff3d8b]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#ffd21f] text-[#14123b] font-extrabold text-xs px-3 py-1 rounded-lg uppercase tracking-wider mb-4">
            Class 10 Career Pathway
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display mb-3">
            {roadmap.career}
          </h1>
          {roadmap.tagline && (
            <p className="text-lg sm:text-xl text-[#dedbf7] max-w-3xl leading-relaxed">
              {roadmap.tagline}
            </p>
          )}
        </div>
      </div>

      {/* Grid of Roadmap Sections */}
      <div className="space-y-8">
        {/* Section 1: 11th & 12th Stream Selection */}
        {roadmap.streamRecommendation && (
          <div className="bg-[#1c194a] border border-[#332e6a] rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#ffd21f]/20 flex items-center justify-center text-[#ffd21f]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                  Stream to Pick After 10th
                </h2>
                <p className="text-xs sm:text-sm text-[#a29dc5]">
                  Your subject decisions for Class 11 & 12
                </p>
              </div>
            </div>

            <div className="mt-4 p-5 rounded-2xl bg-[#14123b] border border-[#2e286e]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs uppercase font-bold text-[#a29dc5] tracking-wider">
                  Recommended Stream:
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#2ce6a6] text-[#14123b] font-black text-sm">
                  {roadmap.streamRecommendation.stream}
                </span>
              </div>

              {roadmap.streamRecommendation.advice && (
                <p className="text-[#dedbf7] text-sm sm:text-base leading-relaxed mb-4">
                  {roadmap.streamRecommendation.advice}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#231e54]">
                {roadmap.streamRecommendation.mandatorySubjects?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-[#ff9acb] uppercase tracking-wider mb-2">
                      Key / Core Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.streamRecommendation.mandatorySubjects.map((sub, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-[#231e54] text-[#dedbf7] text-xs font-semibold">
                          ✓ {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {roadmap.streamRecommendation.optionalSubjects?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-[#a0b2ff] uppercase tracking-wider mb-2">
                      Beneficial Electives:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.streamRecommendation.optionalSubjects.map((sub, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-[#231e54] text-[#dedbf7] text-xs font-semibold">
                          + {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Section 2: What to Do RIGHT NOW in Class 10 (Interactive Checklist) */}
        {roadmap.immediateActions?.length > 0 && (
          <div className="bg-[#1c194a] border border-[#332e6a] rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-[#ff3d8b]/20 flex items-center justify-center text-[#ff3d8b]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                  What You Can Do Right Now
                </h2>
                <p className="text-xs sm:text-sm text-[#a29dc5]">
                  Actionable steps for 10th graders to build an early edge (click to check off!)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {roadmap.immediateActions.map((item, index) => {
                const isChecked = !!checkedTasks[index];
                return (
                  <div
                    key={index}
                    onClick={() => toggleTask(index)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-200 select-none ${
                      isChecked
                        ? 'bg-[#18153d] border-[#2ce6a6]/40 opacity-70'
                        : 'bg-[#14123b] border-[#2e286e] hover:border-[#ffd21f]/50 hover:bg-[#1a164a]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#2ce6a6]">
                        {isChecked ? (
                          <CheckCircle2 className="w-5 h-5 fill-[#2ce6a6] text-[#14123b]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#8b86af]" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className={`text-base font-bold ${isChecked ? 'line-through text-[#8b86af]' : 'text-white'}`}>
                            {item.title}
                          </h4>
                          {item.badge && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#231e54] text-[#ffd21f] shrink-0">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'text-[#6b678c]' : 'text-[#dedbf7]'}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 3: Exams to Crack */}
        {roadmap.examsToCrack?.length > 0 && (
          <div className="bg-[#1c194a] border border-[#332e6a] rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-2xl bg-[#2ce6a6]/20 flex items-center justify-center text-[#2ce6a6]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                  Exams to Crack
                </h2>
                <p className="text-xs sm:text-sm text-[#a29dc5]">
                  Key competitive gateways, entrance tests, and Olympiads
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {roadmap.examsToCrack.map((exam, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#14123b] border border-[#2e286e] flex flex-col justify-between hover:border-[#2ce6a6]/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#ff9acb] uppercase tracking-wider">
                        {exam.stage}
                      </span>
                      {exam.importance && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#ffd21f]/20 text-[#ffd21f]">
                          {exam.importance}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-black text-white font-display mb-2">
                      {exam.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#dedbf7] leading-relaxed">
                      {exam.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: 4-Phase Roadmap Timeline */}
        {roadmap.timelineMilestones?.length > 0 && (
          <div className="bg-[#1c194a] border border-[#332e6a] rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#a0b2ff]/20 flex items-center justify-center text-[#a0b2ff]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                  The Journey: From 10th to Professional
                </h2>
                <p className="text-xs sm:text-sm text-[#a29dc5]">
                  4-stage milestone roadmap
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roadmap.timelineMilestones.map((phase, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#14123b] border border-[#2e286e] relative">
                  <div className="w-8 h-8 rounded-full bg-[#231e54] border border-[#3b357a] flex items-center justify-center text-xs font-black text-[#ffd21f] mb-3">
                    0{i + 1}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#a0b2ff] mb-1">
                    {phase.period}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {phase.phase}
                  </h4>
                  <p className="text-xs text-[#dedbf7] leading-relaxed">
                    {phase.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: Curated Free Resources */}
        {roadmap.freeResources && (
          <div className="bg-[#1c194a] border border-[#332e6a] rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#ff3d8b]/20 flex items-center justify-center text-[#ff3d8b]">
                <Youtube className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                  Free Learning Resources (Start Today)
                </h2>
                <p className="text-xs sm:text-sm text-[#a29dc5]">
                  Best YouTube channels, open courses, and portals that charge ₹0
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* YouTube Channels */}
              {roadmap.freeResources.youtube?.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-[#ffd21f] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Youtube className="w-4 h-4 text-[#ff3d8b]" />
                    <span>Top Recommended YouTube Channels:</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roadmap.freeResources.youtube.map((yt, i) => (
                      <a
                        key={i}
                        href={yt.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-2xl bg-[#14123b] border border-[#2e286e] hover:border-[#ff3d8b] hover:bg-[#1a164a] transition-all group flex items-start justify-between gap-3"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#ffd21f] transition-colors flex items-center gap-1.5">
                            <span>{yt.name}</span>
                          </h4>
                          <p className="text-xs text-[#dedbf7] mt-1 leading-relaxed">
                            {yt.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#8b86af] group-hover:text-white shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Websites */}
              {roadmap.freeResources.websites?.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-[#2ce6a6] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#2ce6a6]" />
                    <span>Free Websites & Practice Portals:</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roadmap.freeResources.websites.map((web, i) => (
                      <a
                        key={i}
                        href={web.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-2xl bg-[#14123b] border border-[#2e286e] hover:border-[#2ce6a6] hover:bg-[#1a164a] transition-all group flex items-start justify-between gap-3"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-[#2ce6a6] transition-colors flex items-center gap-1.5">
                            <span>{web.name}</span>
                          </h4>
                          <p className="text-xs text-[#dedbf7] mt-1 leading-relaxed">
                            {web.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#8b86af] group-hover:text-white shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section 6: Pro Tips & Traps to Avoid */}
        {roadmap.proTips?.length > 0 && (
          <div className="bg-[#1c194a] border border-[#332e6a] rounded-3xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#ffd21f]/20 flex items-center justify-center text-[#ffd21f]">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-display text-white">
                  Counselor's Pro-Tips & Common Traps
                </h2>
                <p className="text-xs sm:text-sm text-[#a29dc5]">
                  Wisdom from mentors so you don't repeat common mistakes
                </p>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              {roadmap.proTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#14123b] border border-[#2e286e]">
                  <span className="w-6 h-6 rounded-full bg-[#231e54] text-[#ffd21f] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    💡
                  </span>
                  <p className="text-sm text-[#dedbf7] leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Back Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={onBack}
          className="px-8 py-3.5 rounded-2xl bg-[#ff3d8b] hover:bg-[#ff257a] text-[#14123b] font-bold text-base border-2 border-white shadow-xl hover:scale-105 transition-all"
        >
          Explore Another Career
        </button>
      </div>
    </div>
  );
}

