import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Text based on image */}
        <div className="text-2xl font-black tracking-tighter text-white">
          SAMSONG <span className="text-gray-400">E&M</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">Why Us</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            제안서 요청하기
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 py-4 px-6 flex flex-col space-y-4">
           <a href="#about" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
          <a href="#solutions" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#contact" className="text-blue-400 font-bold" onClick={() => setMobileMenuOpen(false)}>
            제안서 요청하기
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;