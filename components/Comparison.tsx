import React from 'react';
import { Users, AlertCircle, PlaySquare, Wallet, ShieldCheck, TrendingUp } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-zinc-950 relative border-t border-white/5 overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 break-keep">
            타 사내 복지 프로그램과<br className="md:hidden"/> <span className="text-red-500">비교 불가!</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl break-keep leading-relaxed">
             왜 500개 이상의 기업이 오프라인 행사 대신<br className="md:hidden"/> <span className="text-blue-500 font-bold">삼송E&M의 솔루션</span>을 선택했을까요?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Traditional Events */}
          <div className="bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-800 relative group hover:border-zinc-700 transition-colors">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 text-gray-400 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider border border-zinc-700 whitespace-nowrap">
               기존 오프라인 행사
             </div>
             
             <div className="space-y-8 mt-4">
                <div className="flex items-start gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
                   <div className="bg-zinc-800 p-2.5 rounded-xl shrink-0">
                     <Users size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-300 text-lg mb-1 break-keep">제한적 참여율</h4>
                      <p className="text-sm text-gray-500 leading-relaxed break-keep">대면 참여 필수로 지역/부서별 편차 발생<br/>(지방/해외 근무자 소외)</p>
                   </div>
                </div>
                
                <div className="flex items-start gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
                   <div className="bg-zinc-800 p-2.5 rounded-xl shrink-0">
                     <AlertCircle size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-300 text-lg mb-1 break-keep">불안한 운영 관리</h4>
                      <p className="text-sm text-gray-500 leading-relaxed break-keep">장소 섭외, 안전 사고, 날씨 등<br/>통제 불가능한 변수 다수</p>
                   </div>
                </div>

                <div className="flex items-start gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
                   <div className="bg-zinc-800 p-2.5 rounded-xl shrink-0">
                     <PlaySquare size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-300 text-lg mb-1 break-keep">수동적 관람 위주</h4>
                      <p className="text-sm text-gray-500 leading-relaxed break-keep">동원된 직원들의 낮은 만족도와<br/>형식적인 박수 부대</p>
                   </div>
                </div>

                <div className="flex items-start gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
                   <div className="bg-zinc-800 p-2.5 rounded-xl shrink-0">
                     <Wallet size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-gray-300 text-lg mb-1 break-keep">고비용 저효율</h4>
                      <p className="text-sm text-gray-500 leading-relaxed break-keep">대관료, 식비, 무대 설치 등<br/>소모성 비용 과다 발생 (일회성)</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Samsong Solutions */}
          <div className="bg-gradient-to-b from-blue-900/10 to-zinc-900 rounded-3xl p-8 md:p-12 border border-blue-500/30 relative shadow-2xl shadow-blue-900/20">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-600/40 whitespace-nowrap">
               삼송E&M 솔루션
             </div>
             
             <div className="space-y-8 mt-4">
                <div className="flex items-start gap-4">
                   <div className="bg-blue-600 p-2.5 rounded-xl shrink-0 shadow-lg shadow-blue-600/30">
                     <Users size={24} className="text-white" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white text-lg mb-1 break-keep">압도적 참여율 (Global)</h4>
                      <p className="text-sm text-blue-100/70 leading-relaxed break-keep">전국/해외 지사 포함 전 임직원<br/>시공간 제약 없는 모바일 참여</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-blue-600 p-2.5 rounded-xl shrink-0 shadow-lg shadow-blue-600/30">
                     <ShieldCheck size={24} className="text-white" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white text-lg mb-1 break-keep">완벽한 운영 통제</h4>
                      <p className="text-sm text-blue-100/70 leading-relaxed break-keep">날씨/안전 이슈 없는 100% 온라인 기반<br/>안정적이고 체계적인 프로젝트 운영</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-blue-600 p-2.5 rounded-xl shrink-0 shadow-lg shadow-blue-600/30">
                     <TrendingUp size={24} className="text-white" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white text-lg mb-1 break-keep">능동적 팬덤 형성</h4>
                      <p className="text-sm text-blue-100/70 leading-relaxed break-keep">투표, 댓글, 응원으로 이어지는<br/>직원들의 자발적 몰입과 소통</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-blue-600 p-2.5 rounded-xl shrink-0 shadow-lg shadow-blue-600/30">
                     <Wallet size={24} className="text-white" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white text-lg mb-1 break-keep">확실한 예산 절감</h4>
                      <p className="text-sm text-blue-100/70 leading-relaxed break-keep">기존 오프라인 행사 대비<br/><span className="text-yellow-400 font-bold">50% 이상 비용 절감 효과</span></p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;