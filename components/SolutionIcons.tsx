import React from 'react';

// 1. Online Singing Contest: Spotlight on Mic
export const MicAnim = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
    <defs>
      <linearGradient id="micGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <g transform="translate(100, 100)">
       {/* Spotlight Beams */}
       <path d="M-60 -100 L0 0 L60 -100 Z" fill="url(#micGrad)" opacity="0.3">
         <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
       </path>
       {/* Mic Head */}
       <circle r="25" fill="none" stroke="currentColor" strokeWidth="2" />
       <rect x="-12" y="-15" width="24" height="30" rx="12" fill="currentColor" opacity="0.8" />
       {/* Stand */}
       <rect x="-3" y="15" width="6" height="60" fill="currentColor" />
       <rect x="-30" y="75" width="60" height="4" rx="2" fill="currentColor" />
       {/* Sound Waves */}
       <circle r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5">
          <animate attributeName="r" values="30;50" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
       </circle>
    </g>
  </svg>
);

// 2. Idea Survival: Lightbulb with Rising Chart
export const IdeaAnim = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
    <g transform="translate(100, 100)">
      {/* Lightbulb Shape */}
      <path d="M-30 -40 C-30 -70 30 -70 30 -40 C30 -20 15 -10 15 10 L-15 10 C-15 -10 -30 -20 -30 -40" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M-15 10 L-15 25 Q0 30 15 25 L15 10" fill="currentColor" opacity="0.5" />
      
      {/* Filament / Brain Spark */}
      <path d="M-10 -40 L0 -55 L10 -40" fill="none" stroke="currentColor" strokeWidth="2">
        <animate attributeName="stroke-opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Rising Bar Chart (Business Growth) */}
      <rect x="-40" y="40" width="15" height="20" fill="currentColor" opacity="0.4">
         <animate attributeName="height" values="20;40;20" dur="3s" repeatCount="indefinite" />
         <animate attributeName="y" values="40;20;40" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="-10" y="30" width="15" height="30" fill="currentColor" opacity="0.6">
         <animate attributeName="height" values="30;50;30" dur="3s" repeatCount="indefinite" begin="0.5s" />
         <animate attributeName="y" values="30;10;30" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </rect>
      <rect x="20" y="10" width="15" height="50" fill="currentColor" opacity="0.8">
         <animate attributeName="height" values="50;70;50" dur="3s" repeatCount="indefinite" begin="1s" />
         <animate attributeName="y" values="10;-10;10" dur="3s" repeatCount="indefinite" begin="1s" />
      </rect>
    </g>
  </svg>
);

// 3. CM Song: Headphones & Equalizer
export const MusicAnim = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
    <g transform="translate(100, 100)">
      {/* Headphones Arc */}
      <path d="M-60 20 V-20 A 60 60 0 0 1 60 -20 V20" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      {/* Ear Cups */}
      <rect x="-70" y="10" width="20" height="40" rx="5" fill="currentColor" />
      <rect x="50" y="10" width="20" height="40" rx="5" fill="currentColor" />
      
      {/* Equalizer Bars in middle */}
      <g transform="translate(0, 10)">
        <rect x="-35" y="0" width="10" height="20" rx="2" fill="currentColor" opacity="0.5">
          <animate attributeName="height" values="20;50;20" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="0;-15;0" dur="0.8s" repeatCount="indefinite" />
        </rect>
        <rect x="-15" y="0" width="10" height="40" rx="2" fill="currentColor" opacity="0.7">
          <animate attributeName="height" values="40;70;40" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="0;-15;0" dur="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="5" y="0" width="10" height="30" rx="2" fill="currentColor" opacity="0.6">
          <animate attributeName="height" values="30;60;30" dur="1s" repeatCount="indefinite" />
          <animate attributeName="y" values="0;-15;0" dur="1s" repeatCount="indefinite" />
        </rect>
        <rect x="25" y="0" width="10" height="20" rx="2" fill="currentColor" opacity="0.5">
          <animate attributeName="height" values="20;40;20" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="y" values="0;-10;0" dur="0.9s" repeatCount="indefinite" />
        </rect>
      </g>
    </g>
  </svg>
);

// 4. Retiree Tribute: Spinning Vinyl Record (Album)
export const HeartAnim = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
    <g transform="translate(100, 100)">
       {/* Spinning Record */}
       <g>
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          <circle r="70" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
          <circle r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle r="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          {/* Label */}
          <circle r="25" fill="currentColor" opacity="0.2" />
          <circle r="5" fill="black" />
       </g>
       {/* Tone Arm (Static) */}
       <path d="M70 -70 L40 -40 L50 50" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
       <circle cx="70" cy="-70" r="10" fill="white" opacity="0.5" />
    </g>
  </svg>
);

// 5. Duet Challenge: Intertwining Waveforms
export const DuetAnim = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
    <g transform="translate(0, 100)">
      {/* Wave 1 */}
      <path d="M0 0 Q 50 -50 100 0 T 200 0" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.6">
         <animate attributeName="d" values="M0 0 Q 50 -50 100 0 T 200 0; M0 0 Q 50 50 100 0 T 200 0; M0 0 Q 50 -50 100 0 T 200 0" dur="4s" repeatCount="indefinite" />
      </path>
      {/* Wave 2 (Offset) */}
      <path d="M0 0 Q 50 50 100 0 T 200 0" fill="none" stroke="white" strokeWidth="4" opacity="0.4">
         <animate attributeName="d" values="M0 0 Q 50 50 100 0 T 200 0; M0 0 Q 50 -50 100 0 T 200 0; M0 0 Q 50 50 100 0 T 200 0" dur="4s" repeatCount="indefinite" />
      </path>
      
      {/* Connecting Particles */}
      <circle r="4" fill="white" opacity="0.8">
         <animateMotion path="M0 0 Q 50 -50 100 0 T 200 0" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle r="4" fill="currentColor" opacity="0.8">
         <animateMotion path="M0 0 Q 50 50 100 0 T 200 0" dur="4s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

// 6. Short-form Challenge: Smartphone with Play Button
export const ShortFormAnim = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
    <g transform="translate(100, 100)">
      {/* Phone Body */}
      <rect x="-35" y="-60" width="70" height="120" rx="10" fill="none" stroke="currentColor" strokeWidth="4" />
      {/* Screen Shine */}
      <line x1="-35" y1="-30" x2="35" y2="-50" stroke="white" strokeWidth="1" opacity="0.3" />
      
      {/* Play Button Icon */}
      <path d="M-10 -15 L20 0 L-10 15 Z" fill="currentColor" opacity="0.8">
         <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
         <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Hearts/Likes floating up */}
      <g>
        <path d="M20 30 C20 30 25 25 30 30 C35 35 20 50 20 50 C20 50 5 35 10 30 C15 25 20 30 20 30" fill="currentColor" opacity="0.6">
           <animate attributeName="transform" values="translate(0,0); translate(10,-40); translate(-10,-80)" dur="3s" repeatCount="indefinite" />
           <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M-20 40 C-20 40 -15 35 -10 40 C-5 45 -20 60 -20 60 C-20 60 -35 45 -30 40 C-25 35 -20 40 -20 40" fill="currentColor" opacity="0.6">
           <animate attributeName="transform" values="translate(0,0); translate(-10,-40); translate(10,-80)" dur="4s" repeatCount="indefinite" begin="1s" />
           <animate attributeName="opacity" values="0.6;0" dur="4s" repeatCount="indefinite" begin="1s" />
        </path>
      </g>
    </g>
  </svg>
);

export const getIconById = (id: number) => {
  switch(id) {
    case 1: return <MicAnim />;
    case 2: return <IdeaAnim />;
    case 3: return <MusicAnim />;
    case 4: return <HeartAnim />;
    case 5: return <DuetAnim />;
    case 6: return <ShortFormAnim />;
    default: return <MicAnim />;
  }
};