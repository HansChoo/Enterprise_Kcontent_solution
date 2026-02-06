import React from 'react';
import { CLIENTS } from '../constants';

const ClientLogos: React.FC = () => {
  // Duplicate the list enough times to ensure smooth scrolling on wide screens
  const duplicatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <div className="w-full bg-black border-y border-white/10 py-12 overflow-hidden relative z-20">
       {/* Vignette Effect */}
       <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
       <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
       
       <div className="flex w-max">
          <div className="flex animate-marquee gap-16 px-8">
             {duplicatedClients.map((client, idx) => (
                <div key={idx} className="flex items-center justify-center min-w-[120px]">
                   <img 
                     src={client.logo} 
                     alt={client.name}
                     className="h-8 md:h-12 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-300"
                   />
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default ClientLogos;