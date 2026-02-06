import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-0">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />
         <div className="absolute top-[20%] right-[20%] w-[40vw] md:w-[30vw] h-[40vw] md:h-[30vw] bg-indigo-500/10 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-[fadeIn_1s_ease-out]">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs md:text-sm font-medium text-gray-300 tracking-wider uppercase">Enterprise K-Content Solution</span>
        </div>
        
        {/* Main Title - Applied break-keep */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.2] mb-6 md:mb-8 tracking-tight break-keep">
          조직문화의 새로운 해답,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
            K-콘텐츠를 입다
          </span>
        </h1>
        
        {/* Description - Applied break-keep and responsive line breaks */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed break-keep">
          기업 행사가 <strong className="text-white font-medium">콘텐츠</strong>가 되는 순간.<br className="block md:hidden" />
          임직원이 주인공이 되는<br className="hidden md:block" /> 블록버스터급 사내 이벤트를 경험하세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a 
            href="#solutions" 
            className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50 hover:-translate-y-1 text-base md:text-lg"
          >
            솔루션 보기
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
         <span className="text-[10px] md:text-xs uppercase tracking-widest">Scroll</span>
         <ArrowDown size={14} className="md:w-4 md:h-4" />
      </div>
    </section>
  );
};

export default Hero;