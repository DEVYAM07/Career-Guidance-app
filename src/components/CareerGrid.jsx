import React from 'react';
import { PRESET_BUTTONS } from '../data/presetCareers';

export default function CareerGrid({ onSelectCareer, disabled }) {
  const row1 = PRESET_BUTTONS.slice(0, 5);
  const row2 = PRESET_BUTTONS.slice(5, 10);

  return (
    <div className="w-full mt-4 sm:mt-6">
      {/* Caption */}
      <h3 className="text-sm sm:text-base font-semibold text-[#a29dc5] mb-3 select-none">
        Not sure? Tap one
      </h3>

      {/* Buttons container */}
      <div className="flex flex-col gap-3 max-w-4xl">
        {/* Row 1 */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {row1.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectCareer(item.name)}
              disabled={disabled}
              style={{
                backgroundColor: item.color,
                color: item.textColor,
              }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed select-none"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {row2.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectCareer(item.name)}
              disabled={disabled}
              style={{
                backgroundColor: item.color,
                color: item.textColor,
              }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed select-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

