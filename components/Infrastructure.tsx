import React from 'react';
import { CAPABILITIES } from '../constants';

const Infrastructure: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 break-keep">
             자체 제작이 가능한 곳은 <span className="text-blue-500">삼송E&M</span> 뿐입니다
          </h2>
          <p className="text-gray-400 break-keep">
             100% 인하우스 시스템으로 거품 없는 비용과 최상의 퀄리티를 보장합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <div key={idx} className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 text-center hover:border-blue-500/50 transition-colors group">
               <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                  <cap.icon size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2 break-keep">{cap.title}</h3>
               <p className="text-blue-400 text-sm font-medium mb-4 break-keep">{cap.subtitle}</p>
               <p className="text-gray-500 text-sm leading-relaxed mb-6 break-keep">
                 {cap.description}
               </p>
               <div className="flex flex-wrap gap-2 justify-center">
                 {cap.tags.map((tag, tIdx) => (
                   <span key={tIdx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5 break-keep">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;