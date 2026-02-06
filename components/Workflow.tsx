import React from 'react';
import { FileText, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Workflow: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. 상담 신청",
      desc: "홈페이지 문의 또는 유선 상담을 통해\n니즈를 파악합니다."
    },
    {
      icon: Briefcase,
      title: "2. 맞춤형 제안",
      desc: "기업 규모와 예산에 최적화된\n솔루션과 견적을 제안합니다."
    },
    {
      icon: Calendar,
      title: "3. 계약 및 기획",
      desc: "세부 스케줄을 확정하고\n전담 PM이 배정됩니다."
    },
    {
      icon: CheckCircle2,
      title: "4. 제작 및 실행",
      desc: "체계적인 프로세스에 따라\n프로젝트를 완수합니다."
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 border-t border-white/5">
       <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 break-keep">
               One-Stop 프로세스
             </h2>
             <p className="text-gray-400 break-keep">
               복잡한 절차 없이, 문의 한 번으로 모든 준비가 끝납니다.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 -z-0" />

             {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center z-10">
                   <div className="w-24 h-24 bg-zinc-900 border-4 border-zinc-950 rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
                      <step.icon size={32} className="text-gray-300" />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-2 break-keep">{step.title}</h3>
                   <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed break-keep">
                      {step.desc}
                   </p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Workflow;