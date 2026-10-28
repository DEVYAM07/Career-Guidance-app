import React, { useState } from 'react';
import { Terminal, X, Copy, Check, Info } from 'lucide-react';
import { FIXED_PROMPT_TEMPLATE } from '../services/geminiService';

export default function PromptModal({ isOpen, onClose, currentCareer }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentPrompt = currentCareer
    ? FIXED_PROMPT_TEMPLATE.replace(/\{CAREER_NAME\}/g, currentCareer)
    : FIXED_PROMPT_TEMPLATE;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#191544] border-2 border-[#3b357a] rounded-3xl p-6 sm:p-8 flex flex-col shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2e286e]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#2ce6a6]/20 flex items-center justify-center text-[#2ce6a6]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Internal LLM Prompt Template
              </h3>
              <p className="text-xs text-[#a29dc5]">
                Fixed system prompt with single dynamic parameter: <code className="text-[#ffd21f]">{'{CAREER_NAME}'}</code>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#231e54] text-[#a29dc5] hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="mt-4 p-3.5 rounded-2xl bg-[#14123b] border border-[#2e286e] flex items-start gap-2.5 text-xs text-[#dedbf7]">
          <Info className="w-4 h-4 text-[#ffd21f] shrink-0 mt-0.5" />
          <p>
            Every query sends this exact structured prompt to the LLM. Only the career name changes.
            The LLM returns structured JSON conforming to the schema for 10th-grade roadmaps.
          </p>
        </div>

        {/* Prompt Content */}
        <div className="mt-4 flex-1 overflow-y-auto rounded-2xl bg-[#100d2f] p-4 border border-[#262157] font-mono text-xs text-[#2ce6a6] leading-relaxed select-text">
          <pre className="whitespace-pre-wrap">{currentPrompt}</pre>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 flex items-center justify-between">
          <span className="text-xs text-[#8b86af]">
            Career parameter: <span className="text-[#ffd21f] font-bold">{currentCareer || 'Dynamic Career'}</span>
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ff3d8b] text-[#14123b] font-bold text-xs hover:bg-[#ff257a] transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Prompt' : 'Copy Prompt'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
