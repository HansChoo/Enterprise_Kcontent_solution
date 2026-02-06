import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Track which video is currently playing by index
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingVideoIndex(index);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <h4 className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Our Track Record</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight break-keep">
              성공적인 <span className="text-gray-500">프로젝트 쇼케이스</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl text-sm md:text-base break-keep leading-relaxed">
              국내 유수의 대기업들과 함께 만들어낸<br className="md:hidden"/> 혁신적인 콘텐츠 사례들을 확인해보세요.
            </p>
          </div>
          <a href="#contact" className="hidden md:block text-gray-400 hover:text-white border-b border-gray-700 hover:border-white transition-all pb-1 text-sm font-medium">
            전체 포트폴리오 요청하기 &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div key={idx} className="group relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer shadow-lg shadow-black/50">
              
              {playingVideoIndex === idx && item.youtubeId ? (
                // Video Player (Iframe)
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // Thumbnail View
                <div onClick={() => handlePlay(idx)} className="w-full h-full relative">
                  {/* Image with zoom effect */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-blue-600 hover:border-blue-500 transition-colors shadow-2xl">
                      <Play className="fill-white text-white ml-1" size={24} />
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                      {item.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-100 transition-colors break-keep">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
        
        {/* Mobile View More Button */}
        <div className="md:hidden mt-10 text-center">
             <a href="#contact" className="inline-block px-8 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition-colors font-medium">
                더 많은 포트폴리오 보기
             </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;