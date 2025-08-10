import React, { useState } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b-4 ${
      isDarkMode 
        ? 'bg-black border-green-400' 
        : 'bg-white border-orange-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className={`w-6 h-6 sm:w-8 sm:h-8 ${
              isDarkMode ? 'text-green-400' : 'text-orange-500'
            }`} />
            <span className={`text-lg sm:text-xl font-bold ${
              isDarkMode ? 'text-green-400' : 'text-orange-500'
            }`}>~/PORTFOLIO</span>
          </div>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-bold transition-colors duration-200 relative group ${
                    isDarkMode 
                      ? 'text-white hover:text-green-400' 
                      : 'text-black hover:text-orange-500'
                  }`}
                >
                  {item}
                  <div className={`absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                    isDarkMode ? 'bg-green-400' : 'bg-orange-500'
                  }`}></div>
                </a>
              ))}
            </nav>
            
            <button
              onClick={toggleTheme}
              className={`p-2 border-2 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-green-400 text-black' 
                  : 'bg-orange-400 text-black'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 border-2 border-black shadow-brutal ${
                isDarkMode 
                  ? 'bg-green-400 text-black' 
                  : 'bg-orange-400 text-black'
              }`}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button
              className={isDarkMode ? 'text-green-400' : 'text-orange-500'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t-2 ${
            isDarkMode ? 'border-green-400' : 'border-orange-400'
          }`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block py-3 px-2 font-bold transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-white hover:text-green-400' 
                    : 'text-black hover:text-orange-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;