import React from 'react';
import { Sparkles, Terminal, Settings } from 'lucide-react';

export default function Header({ onOpenPrompt, onOpenSettings, isApiKeySet }) {
  return (
    <div className="w-full pt-8 sm:pt-12 pb-2">
      {/* Top utility row */}
      <div className="flex items-center justify-between mb-8">
        {/* Yellow pill badge: Level Up (strictly matching the attached UI) */}
        <div className="inline-block bg-[#ffd21f] text-[#14123b] font-black text-sm sm:text-base px-5 py-1.5 rounded-xl border-2 border-white shadow-sm select-none">
          Level Up
        </div>

        {/* Action icons: Prompt Template & Settings */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPrompt}
            title="Inspect LLM Prompt Template"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#231e54] hover:bg-[#2e286e] text-[#dedbf7] text-xs font-semibold border border-[#3b357a] transition-all hover:scale-105"
          >
            <Terminal className="w-3.5 h-3.5 text-[#2ce6a6]" />
            <span className="hidden sm:inline">LLM Prompt</span>
          </button>

          <button
            onClick={onOpenSettings}
            title="API Settings"
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#231e54] hover:bg-[#2e286e] text-[#dedbf7] text-xs font-semibold border border-[#3b357a] transition-all hover:scale-105"
          >
            <Settings className="w-3.5 h-3.5 text-[#ffd21f]" />
            <span className="hidden sm:inline">Settings</span>
            {isApiKeySet && (
              <span className="w-2 h-2 rounded-full bg-[#2ce6a6] absolute -top-1 -right-1 ring-2 ring-[#14123b]" />
            )}
          </button>
        </div>
      </div>

      {/* Main big headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] mb-5 font-display">
        What do you<br />
        wanna become?
      </h1>

      {/* Sub-headline */}
      <p className="text-base sm:text-lg text-[#dedbf7] font-normal max-w-2xl leading-relaxed">
        Type a career. Get your path after 10th, the exams to crack,<br className="hidden sm:inline" />
        and free stuff to start learning today.
      </p>
    </div>
  );
}