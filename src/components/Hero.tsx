import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Cpu, Star, Rocket, Satellite, Moon } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "COMPUTER ENGINEERING STUDENT";

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className={`min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden ${
      isDarkMode ? 'bg-black bg-grid-subtle-dark' : 'bg-white bg-grid-subtle-light'
    }`}>
      {/* Floating Emoji Layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-0">
        <span className="absolute left-[8%] top-[18%] text-3xl sm:text-4xl animate-float-slow">✨</span>
        <span className="absolute left-[78%] top-[22%] text-3xl sm:text-4xl animate-float-med">💾</span>
        <span className="absolute left-[16%] top-[68%] text-2xl sm:text-3xl animate-float-fast">⚡</span>
        <span className="absolute left-[86%] top-[72%] text-2xl sm:text-3xl animate-bob">🕹️</span>
        <span className="absolute left-[42%] top-[10%] text-3xl sm:text-4xl animate-bob">🚀</span>
        <span className="absolute left-[52%] top-[82%] text-2xl sm:text-3xl animate-float-med">🎯</span>
      </div>
      {/* Gentle space icon layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-0">
        <Star size={18} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[12%] top-[28%] animate-space-drift-slow`} />
        <Moon size={22} className={`${isDarkMode ? 'text-green-300' : 'text-blue-600'} opacity-20 absolute left-[70%] top-[18%] animate-space-drift-med`} />
        <Satellite size={20} className={`${isDarkMode ? 'text-orange-300' : 'text-green-500'} opacity-20 absolute left-[22%] top-[76%] animate-space-drift-med`} />
        <Rocket size={22} className={`${isDarkMode ? 'text-blue-300' : 'text-purple-500'} opacity-20 absolute left-[82%] top-[66%] animate-space-drift-slow`} />
        <Star size={16} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[38%] top-[12%] animate-space-drift-slow`} />
        <Star size={14} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[56%] top-[84%] animate-space-drift-med`} />
      </div>
      {/* Background ASCII Pattern */}
      <div className={`absolute inset-0 opacity-5 text-xs leading-none overflow-hidden ${
        isDarkMode ? 'text-green-400' : 'text-orange-400'
      }`}>
        <pre className="whitespace-pre">
          {Array(50).fill(null).map((_, i) => (
            <div key={i}>
              {'01010101 11001100 10101010 00110011 '.repeat(50)}
            </div>
          ))}
        </pre>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Terminal Window */}
        <div className={`border-4 shadow-brutal mb-6 sm:mb-8 animate-fade-in-up relative ${
          isDarkMode 
            ? 'bg-black border-white' 
            : 'bg-white border-black'
        }`}>
          <div className={`p-2 flex items-center space-x-2 ${
            isDarkMode 
              ? 'bg-white text-black' 
              : 'bg-black text-white'
          }`}>
            <div className="w-3 h-3 bg-red-500"></div>
            <div className="w-3 h-3 bg-yellow-500"></div>
            <div className="w-3 h-3 bg-green-500"></div>
            <span className="text-xs sm:text-sm font-bold">TERMINAL - PORTFOLIO.EXE</span>
          </div>
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="text-left mb-4">
              <span className={isDarkMode ? 'text-green-400' : 'text-orange-500'}>user@portfolio:~$ </span>
              <span className={isDarkMode ? 'text-white' : 'text-black'}>whoami</span>
            </div>
            <h1 className={`text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              ALEX CHEN
            </h1>
            <div className="text-left mb-4">
              <span className={isDarkMode ? 'text-green-400' : 'text-orange-500'}>user@portfolio:~$ </span>
              <span className={isDarkMode ? 'text-white' : 'text-black'}>cat role.txt</span>
            </div>
            <div className={`text-lg sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-left ${
              isDarkMode ? 'text-orange-400' : 'text-blue-600'
            }`}>
              {displayText}
              {showCursor && <span className={isDarkMode ? 'text-white' : 'text-black'}>_</span>}
            </div>
          </div>
          {/* Scanline overlay for retro vibe */}
          <div aria-hidden className="absolute inset-x-0 top-0 h-1 opacity-20 animate-scanline"
               style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))' }} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8 animate-fade-in-up">
          <a href="#projects" className={`px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-lg border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center ${
            isDarkMode ? 'bg-green-400' : 'bg-orange-400'
          } text-black`}>
            <Code size={24} />
            <span>VIEW PROJECTS</span>
            <ChevronRight size={24} />
          </a>
          <a href="/Alex_Chen_CV.pdf" download className={`px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-lg border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center ${
            isDarkMode ? 'bg-orange-400' : 'bg-green-400'
          } text-black`}>
            <Cpu size={24} />
            <span>DOWNLOAD CV</span>
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {[
            { label: 'YEARS OF CODING', value: '5+' },
            { label: 'PROJECTS COMPLETED', value: '25+' },
            { label: 'COFFEE CONSUMED', value: '∞' }
          ].map((stat, index) => (
            <div key={index} className={`p-3 sm:p-4 border-4 border-black shadow-brutal ${
              isDarkMode 
                ? 'bg-white text-black' 
                : 'bg-black text-white'
            }`}>
              <div className={`text-2xl sm:text-3xl font-bold ${
                isDarkMode ? 'text-orange-400' : 'text-green-400'
              }`}>{stat.value}</div>
              <div className="text-xs sm:text-sm font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;