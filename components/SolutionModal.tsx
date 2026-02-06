import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Solution, SolutionDetail } from '../types';

interface Props {
  solution: Solution;
  detail: SolutionDetail;
  isOpen: boolean;
  onClose: () => void;
}

const SolutionModal: React.FC<Props> = ({ solution, detail, isOpen, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    // Use a small timeout to allow modal to close before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full md:max-w-5xl h-full md:h-[90vh] bg-zinc-950 md:rounded-3xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header - Sticky */}
        <div className={`relative px-6 py-4 md:px-8 md:py-5 border-b border-white/5 bg-zinc-900 z-20 flex justify-between items-center shrink-0`}>
          <div className="flex items-center gap-4">
             <div className={`p-2.5 rounded-xl ${solution.theme.bg} text-white shadow-lg hidden md:block`}>
               <solution.icon size={20} />
             </div>
             <div>
               <div className="flex items-center gap-2 mb-0.5">
                 <span className={`text-[10px] md:text-xs font-bold ${solution.theme.text} uppercase tracking-wider`}>
                   Solution 0{solution.id}
                 </span>
               </div>
               <h2 className="text-lg md:text-xl font-bold text-white leading-tight whitespace-pre-line break-keep">
                 {solution.title}
               </h2>
             </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div ref={contentRef} className="flex-1 overflow-y-auto custom-scrollbar bg-black">
          
            <div className="animate-[fadeIn_0.3s_ease-out]">
                
                {/* 1. Hero Banner - Focused on Value Proposition */}
                <div className="relative py-16 px-6 md:px-10 overflow-hidden text-center bg-zinc-900 border-b border-white/5">
                   <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-${solution.theme.primary}-500/10 rounded-full blur-[100px] pointer-events-none`} />
                   <div className="relative z-10 max-w-3xl mx-auto">
                      <span className={`inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold ${solution.theme.text} mb-6 break-keep whitespace-pre-line`}>
                        {detail.catchphrase}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6 break-keep">
                        {solution.subtitle}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed break-keep">
                        {detail.overview}
                      </p>
                   </div>
                </div>

                {/* 2. Key Benefits (Why This Program?) */}
                <div className="bg-zinc-950 py-16 px-6 md:px-10">
                   <div className="max-w-5xl mx-auto">
                     <div className="text-center mb-12">
                       <h4 className="text-2xl font-bold text-white mb-2 break-keep">핵심 기대 효과</h4>
                       <p className="text-gray-500 break-keep">이 솔루션을 도입해야 하는 4가지 이유</p>
                     </div>
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {detail.benefits.map((benefit, idx) => (
                           <div key={idx} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 text-center hover:bg-zinc-900 transition-colors">
                              <div className={`w-12 h-12 mx-auto rounded-xl bg-zinc-800 flex items-center justify-center mb-4 ${solution.theme.text}`}>
                                <benefit.icon size={24} />
                              </div>
                              <h5 className="text-white font-bold text-lg mb-2 break-keep">{benefit.title}</h5>
                              <p className="text-gray-400 text-sm leading-relaxed break-keep">{benefit.description}</p>
                           </div>
                        ))}
                     </div>
                   </div>
                </div>

                {/* 3. Specific Process Flow (Visual) */}
                <div className="bg-zinc-900 py-16 px-6 md:px-10 border-y border-white/5">
                   <div className="max-w-4xl mx-auto">
                     <div className="text-center mb-12">
                        <h4 className="text-2xl font-bold text-white mb-2 break-keep">상세 진행 로드맵</h4>
                        <p className="text-gray-500 break-keep">성공적인 행사를 위한 단계별 실행 계획</p>
                     </div>
                     
                     <div className="relative">
                        {/* Vertical Line for Mobile */}
                        <div className={`absolute left-6 top-4 bottom-4 w-0.5 ${solution.theme.bg} opacity-20 md:hidden`} />
                        
                        <div className="space-y-6">
                           {detail.flowSteps.map((step, idx) => (
                              <div key={idx} className="relative flex gap-6 items-start group">
                                 {/* Step Number */}
                                 <div className={`relative z-10 w-12 h-12 shrink-0 rounded-full ${solution.theme.bg} text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-${solution.theme.primary}-900/50 ring-4 ring-zinc-900`}>
                                    {step.step}
                                 </div>
                                 {/* Content */}
                                 <div className="bg-black p-5 rounded-2xl border border-zinc-800 flex-1 hover:border-zinc-700 transition-colors">
                                    <h5 className={`text-lg font-bold ${solution.theme.text} mb-1 break-keep`}>{step.title}</h5>
                                    <p className="text-gray-400 text-sm leading-relaxed break-keep">{step.description}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                   </div>
                </div>

                {/* 4. Pricing Section */}
                <div className="bg-zinc-950 px-6 py-16 md:px-10 border-b border-zinc-800">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-white mb-3 break-keep">제안 견적 및 패키지</h3>
                            <p className="text-gray-400 text-sm break-keep">기업 규모와 예산에 맞춰 최적의 플랜을 선택하세요.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                        {detail.pricing.map((tier, idx) => (
                            <div 
                            key={idx} 
                            className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                                tier.isRecommended 
                                ? `bg-zinc-800/80 border-${solution.theme.primary}-500 shadow-xl scale-105 z-10` 
                                : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                            }`}
                            >
                            {tier.isRecommended && (
                                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${solution.theme.bg} shadow-lg`}>
                                RECOMMENDED
                                </div>
                            )}

                            <div className="mb-6">
                                <h4 className="text-lg font-bold text-white mb-2 break-keep">{tier.name}</h4>
                                <p className="text-xs text-gray-500 mb-4 h-8 break-keep">{tier.target}</p>
                                <div className="text-2xl font-black text-white">{tier.price}</div>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {tier.features.map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${solution.theme.text}`} />
                                    <span className="leading-snug break-keep">{feature}</span>
                                </div>
                                ))}
                            </div>

                            <a href="#contact" onClick={handleContactClick} className={`block text-center w-full py-3 rounded-xl font-bold text-sm transition-all ${
                                tier.isRecommended 
                                ? `${solution.theme.bg} text-white hover:brightness-110` 
                                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}>
                                상세 견적 문의하기
                            </a>
                            </div>
                        ))}
                        </div>
                        
                        <div className="mt-8 p-4 bg-zinc-900 rounded-xl border border-white/5 text-center text-xs text-gray-500 leading-relaxed break-keep">
                        ※ 상기 견적은 예상 범위이며, 실제 비용은 참여 인원, 촬영 회차, 옵션 선택 등에 따라 변동될 수 있습니다.<br/>
                        ※ 부가세(VAT) 별도 금액입니다.
                        </div>
                    </div>
                </div>

                {/* 5. Expanded FAQ Section */}
                <div className="max-w-3xl mx-auto px-6 py-16">
                     <h3 className="text-2xl font-bold text-white mb-8 text-center break-keep">자주 묻는 질문 (FAQ)</h3>
                     <div className="space-y-4">
                       {detail.faq.map((item, idx) => (
                         <div key={idx} className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden hover:bg-zinc-900 transition-colors">
                           <div className="p-6">
                             <h4 className="flex items-start gap-3 text-base md:text-lg font-bold text-white mb-3">
                               <span className={`text-${solution.theme.primary}-500 shrink-0 mt-0.5`}>Q.</span>
                               <span className="break-keep">{item.q}</span>
                             </h4>
                             <div className="flex items-start gap-3 text-sm md:text-base text-gray-400 pl-0 md:pl-7 leading-relaxed">
                                <span className="font-bold shrink-0 mt-0.5">A.</span>
                                <span className="break-keep">{item.a}</span>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                </div>
            </div>
        </div>

        {/* Footer - Simple CTA */}
        <div className="p-4 md:p-6 border-t border-white/10 bg-zinc-900 flex justify-center shrink-0">
             <a 
               href="#contact" 
               onClick={handleContactClick}
               className={`w-full md:w-auto px-12 py-4 rounded-xl font-bold text-white transition-all hover:brightness-110 flex items-center justify-center gap-2 ${solution.theme.bg} shadow-lg text-lg`}
             >
               <span>도입 문의하기</span>
               <ArrowRight size={20} />
             </a>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;