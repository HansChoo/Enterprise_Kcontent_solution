import React, { useRef, useState } from 'react';
import { Solution } from '../types';
import { ArrowRight } from 'lucide-react';
import { getIconById } from './SolutionIcons';

interface Props {
  solution: Solution;
  index: number;
  onClick: () => void;
}

const SolutionCard: React.FC<Props> = ({ solution, index, onClick }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={divRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`group relative h-full bg-zinc-900/50 backdrop-blur-md rounded-[2rem] border border-white/5 p-6 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${solution.theme.border} ${solution.theme.shadow} shadow-xl cursor-pointer flex flex-col`}
    >
      
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      
      {/* Colored Glow Blob */}
      <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none ${solution.theme.bg}`} />

      {/* Animated SVG Illustration */}
      <div className={`absolute -right-10 -bottom-10 w-48 h-48 md:w-64 md:h-64 opacity-10 group-hover:opacity-80 transition-all duration-500 pointer-events-none rotate-12 group-hover:rotate-0 group-hover:scale-110 ${solution.theme.text}`}>
        {getIconById(solution.id)}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
           <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors ${solution.theme.text}`}>
              <solution.icon size={24} />
           </div>
           
           {/* Big Number Watermark */}
           <span className="text-5xl md:text-6xl font-black text-white/5 font-mono tracking-tighter absolute top-0 right-0 pointer-events-none select-none">
             0{solution.id}
           </span>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight break-keep whitespace-pre-line min-h-[4rem] md:min-h-[4.5rem]">
            {solution.title}
          </h3>
          <p className={`text-xs md:text-sm font-bold uppercase tracking-widest mb-4 break-keep ${solution.theme.text}`}>
            {solution.subtitle}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-[95%] md:max-w-[90%] break-keep">
            {solution.description}
          </p>

          {/* Features Grid - Single Column Layout */}
          <div className="grid grid-cols-1 gap-3 border-t border-white/5 pt-6 pb-6">
            {solution.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors break-keep">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${solution.theme.bg}`} />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to indicate clickability */}
        <div className={`mt-auto pt-4 flex items-center gap-2 text-sm font-bold ${solution.theme.text} group-hover:translate-x-2 transition-transform duration-300`}>
           <span>상세보기</span>
           <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;