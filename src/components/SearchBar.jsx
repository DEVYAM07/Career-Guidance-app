import React, { useRef, useEffect } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';

export default function SearchBar({ value, onChange, onSubmit, isLoading }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full my-6 sm:my-8">
      <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 max-w-3xl">
        {/* Input box */}
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Doctor, pilot, game developer..."
            disabled={isLoading}
            className="w-full h-14 sm:h-16 px-6 text-base sm:text-lg font-medium bg-white text-[#14123b] placeholder-[#8b86af] rounded-2xl outline-none focus:ring-4 focus:ring-[#ff3d8b]/30 shadow-lg transition-all duration-200"
          />
          {value && !isLoading && (
            <button
              type="button"
              onClick={() => {
                onChange('');
                inputRef.current?.focus();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#e8e5f5] text-[#14123b] flex items-center justify-center text-xs font-bold hover:bg-[#d8d3f0] transition-colors"
            >
              ✕
            </button>
          )}
        </div>

        {/* Submit button: Pink with white border */}
        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          className="h-14 sm:h-16 px-8 rounded-2xl bg-[#ff3d8b] hover:bg-[#ff257a] text-[#14123b] font-bold text-base sm:text-lg border-2 border-white shadow-lg transition-all duration-200 flex items-center justify-center gap-2 select-none hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shrink-0"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <span>Show my path</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

