import React from 'react';
import { MonitorPlay, Building2, Trophy } from 'lucide-react';

const FEATURES = [
  {
    icon: MonitorPlay,
    title: "K-Content Expertise",
    desc: "현직 예능 PD와 작가진이 기획하는 방송국 수준의 구성과 연출력"
  },
  {
    icon: Building2,
    title: "In-house Studio",
    desc: "촬영, 녹음, 편집이 논스톱으로 가능한 자체 보유 멀티플렉스 스튜디오"
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "삼성, LG, SK 등 500개 이상의 기업 프로젝트를 완수한 검증된 신뢰도"
  }
];

const STATS_BAR = [
  { label: "Partner Companies", value: "500+" },
  { label: "Total Projects", value: "3,000+" },
  { label: "Tech Grade", value: "T-4" },
  { label: "Facilities", value: "All-in-One" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#080808] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h4 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 md:mb-6 animate-pulse">
            Why Samsong E&M
          </h4>
          <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight mb-6 md:mb-8 break-keep">
            단순 이벤트 대행이 아닙니다.<br />
            <span className="text-gray-500">기업 문화를 만드는 크리에이티브 그룹입니다.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light break-keep">
             SAMSONG E&M은 기획부터 제작, 송출까지<br className="md:hidden"/> 모든 과정을 내부 시스템으로 소화합니다.<br className="hidden md:block" />
             불필요한 외주 비용을 줄이고, 결과물의 퀄리티는 극대화합니다.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white/[0.03] p-8 md:p-10 rounded-3xl border border-white/5 hover:bg-white/[0.06] transition-all duration-300 group text-center hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-blue-600/10 rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-blue-600 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-500">
                <feature.icon className="text-blue-500 group-hover:text-white w-7 h-7 md:w-8 md:h-8 transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm break-keep">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar - Improved mobile spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 border-t border-white/10 pt-12 md:pt-16">
           {STATS_BAR.map((stat, idx) => (
             <div key={idx} className="text-center">
                <div className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-sm font-medium text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default About;