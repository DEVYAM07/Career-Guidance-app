import React, { useState, useEffect } from 'react';
import { Settings, X, Key, Check, AlertCircle, Sparkles } from 'lucide-react';

export default function SettingsModal({ isOpen, onClose, onSaveKey, currentApiKey }) {
  const [keyInput, setKeyInput] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setKeyInput(currentApiKey || '');
      setSavedSuccess(false);
    }
  }, [isOpen, currentApiKey]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveKey(keyInput.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 800);
  };

  const handleClear = () => {
    setKeyInput('');
    onSaveKey('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#191544] border-2 border-[#3b357a] rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2e286e]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#ffd21f]/20 flex items-center justify-center text-[#ffd21f]">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                LLM API Configuration
              </h3>
              <p className="text-xs text-[#a29dc5]">
                Optional Google Gemini API Key
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

        {/* Description */}
        <div className="my-5 space-y-3">
          <div className="p-3.5 rounded-2xl bg-[#14123b] border border-[#2e286e] text-xs text-[#dedbf7] space-y-2">
            <div className="flex items-center gap-1.5 text-[#2ce6a6] font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Zero-Config Ready:</span>
            </div>
            <p>
              The app comes pre-packaged with complete, expert-vetted roadmaps for all preset careers and an offline smart engine for any custom career.
            </p>
            <p className="text-[#a29dc5]">
              Adding your <strong>Google Gemini API key</strong> enables live, unbounded generation using Gemini 1.5 Flash.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#a0b2ff] uppercase tracking-wider mb-2">
              Gemini API Key:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8b86af]">
                <Key className="w-4 h-4" />
              </div>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full pl-10 pr-4 py-3 bg-[#100d2f] border border-[#3b357a] rounded-xl text-sm text-white placeholder-[#6b678c] outline-none focus:border-[#2ce6a6] transition-colors font-mono"
              />
            </div>
            <p className="text-[11px] text-[#8b86af] mt-1.5">
              Saved strictly in your browser's private local storage. Never sent to any external server.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#2e286e]">
          {keyInput && (
            <button
              onClick={handleClear}
              type="button"
              className="text-xs text-[#ff9acb] hover:underline"
            >
              Clear Key
            </button>
          )}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-xl bg-[#231e54] text-xs font-semibold text-[#dedbf7] hover:bg-[#2e286e]"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="px-5 py-2 rounded-xl bg-[#2ce6a6] text-[#14123b] text-xs font-bold hover:bg-[#22cb91] transition-all flex items-center gap-1.5"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Settings</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

