import React, { useState } from 'react';
import SolutionCard from './SolutionCard';
import SolutionModal from './SolutionModal';
import { SOLUTIONS, SOLUTION_DETAILS } from '../constants';
import { MousePointerClick } from 'lucide-react';

const Solutions: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedSolutionId(id);
  };

  const handleCloseModal = () => {
    setSelectedSolutionId(null);
  };

  const selectedSolution = selectedSolutionId ? SOLUTIONS.find(s => s.id === selectedSolutionId) : null;
  const selectedDetail = selectedSolutionId ? SOLUTION_DETAILS[selectedSolutionId] : null;

  return (
    <section id="solutions" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
         <div className="absolute top-[10%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-blue-900/20 rounded-full blur-[80px] md:blur-[120px]" />
         <div className="absolute bottom-[10%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-purple-900/20 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            성공하는 조직문화를 위한<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">6가지 솔루션</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg break-keep leading-relaxed mb-8">
            기존 행사의 한계를 넘어선 압도적인 몰입감.<br className="hidden md:block"/>
            임직원들이 자발적으로 참여하고 즐기는, 검증된 콘텐츠 라인업을 확인해보세요.
          </p>
          
          {/* Visual Cue for Interaction */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-blue-400 animate-pulse shadow-lg shadow-blue-900/20">
            <MousePointerClick size={18} />
            <span className="font-semibold">카드를 클릭하여 상세내용을 확인하세요</span>
          </div>
        </div>

        {/* Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SOLUTIONS.map((solution, index) => (
             <SolutionCard 
                key={solution.id} 
                solution={solution} 
                index={index} 
                onClick={() => handleCardClick(solution.id)}
             />
          ))}
        </div>
      </div>

      {/* Modal Integration */}
      {selectedSolution && selectedDetail && (
        <SolutionModal 
          solution={selectedSolution} 
          detail={selectedDetail} 
          isOpen={!!selectedSolutionId} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default Solutions;