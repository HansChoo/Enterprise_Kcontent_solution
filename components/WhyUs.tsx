import React from 'react';
import { MonitorPlay, Building2, Trophy } from 'lucide-react';
import { STUDIO_IMAGES, CERT_IMAGES } from '../constants';

const CORE_VALUES = [
  {
    icon: MonitorPlay,
    title: "콘텐츠 제작 전문성",
    desc: "전문 기획자와 촬영/편집, 음악 전문가가 기획하는 방송국 수준의 구성과 연출력으로 재미와 감동을 보장합니다."
  },
  {
    icon: Building2,
    title: "올인원 인하우스 시스템",
    desc: "기획부터 촬영, 편집, 송출까지. 외주 없는 100% 인하우스 제작 시스템으로 최상의 퀄리티를 유지합니다."
  },
  {
    icon: Trophy,
    title: "검증된 신뢰도",
    desc: "삼성, LG, SK 등 500개 이상의 기업 프로젝트를 성공적으로 완수한 독보적인 경험과 노하우를 보유하고 있습니다."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#080808] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* 1. Intro Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h4 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 md:mb-6 animate-pulse">
            Why Samsong E&M
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 md:mb-8 break-keep">
            단순 대행사가 아닌,<br />
            <span className="text-gray-500">기업 문화를 만드는 크리에이티브 파트너</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light break-keep">
             자체 제작이 가능한 곳은 삼송E&M 뿐입니다.<br className="hidden md:block" />
             거품 없는 비용과 완벽한 퀄리티, 검증된 인프라로 증명합니다.
          </p>
        </div>

        {/* 2. Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 group text-center hover:bg-zinc-900">
              <div className="w-16 h-16 mx-auto bg-black rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/10 group-hover:scale-110 transition-transform">
                <val.icon className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 break-keep">{val.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed break-keep">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Studio & Equipment Gallery */}
        <div className="mb-20">
           <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-3">인하우스 멀티플렉스 스튜디오</h3>
              <p className="text-sm text-gray-500">자체 보유한 촬영/녹음 스튜디오와 최첨단 장비 인프라</p>
           </div>
           
           {/* Mobile Grid: 2 cols, Desktop Grid: 4 cols */}
           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {STUDIO_IMAGES.map((img, idx) => (
                <div key={idx} className="group relative aspect-[4/3] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                   {/* 실제 이미지 */}
                   <img 
                     src={img.url} 
                     alt={img.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                   />
                   
                   {/* 오버레이 텍스트 */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-bold text-sm md:text-base">{img.title}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* 4. Certifications & Patents */}
        <div className="mb-20">
           <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-3">검증된 기술력 및 인증</h3>
              <p className="text-sm text-gray-500">콘텐츠 기술 평가 우수기업 및 각종 경영 혁신 인증 보유</p>
           </div>

           <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {CERT_IMAGES.map((cert, idx) => (
                 <div key={idx} className="w-32 h-32 md:w-40 md:h-40 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors overflow-hidden p-6 group">
                    <img 
                      src={cert.url} 
                      alt={cert.name}
                      className="w-full h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;