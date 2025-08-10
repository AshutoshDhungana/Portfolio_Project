import React from 'react';
import { Terminal, Heart, Coffee } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`border-t-4 border-black py-6 sm:py-8 px-4 ${
      isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          {/* ASCII Art */}
          <pre className={`text-xs font-mono mb-4 hidden sm:block ${
            isDarkMode ? 'text-gray-600' : 'text-gray-400'
          }`}>
{`
 ████████╗██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗███████╗
 ╚══██╔══╝██║  ██║██╔══██╗████╗  ██║██║ ██╔╝██╔════╝
    ██║   ███████║███████║██╔██╗ ██║█████╔╝ ███████╗
    ██║   ██╔══██║██╔══██║██║╚██╗██║██╔═██╗ ╚════██║
    ██║   ██║  ██║██║  ██║██║ ╚████║██║  ██╗███████║
    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
`}
          </pre>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Quick Links */}
          <div className={`text-black p-3 sm:p-4 border-4 border-black shadow-brutal ${
            isDarkMode ? 'bg-green-400' : 'bg-orange-400'
          }`}>
            <h4 className="font-bold text-sm sm:text-lg mb-3 sm:mb-4 flex items-center space-x-2">
              <Terminal size={20} />
              <span>QUICK LINKS</span>
            </h4>
            <ul className="space-y-1 sm:space-y-2 font-bold text-xs sm:text-sm">
              <li><a href="#about" className="hover:underline">→ ABOUT</a></li>
              <li><a href="#skills" className="hover:underline">→ SKILLS</a></li>
              <li><a href="#projects" className="hover:underline">→ PROJECTS</a></li>
              <li><a href="#contact" className="hover:underline">→ CONTACT</a></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className={`text-black p-3 sm:p-4 border-4 border-black shadow-brutal ${
            isDarkMode ? 'bg-orange-400' : 'bg-blue-400'
          }`}>
            <h4 className="font-bold text-sm sm:text-lg mb-3 sm:mb-4">BUILT WITH</h4>
            <ul className="space-y-1 sm:space-y-2 font-bold text-xs sm:text-sm">
              <li>→ React + TypeScript</li>
              <li>→ Tailwind CSS</li>
              <li>→ Lucide Icons</li>
              <li>→ Vite</li>
            </ul>
          </div>

          {/* Fun Facts */}
          <div className={`text-black p-3 sm:p-4 border-4 border-black shadow-brutal sm:col-span-2 lg:col-span-1 ${
            isDarkMode ? 'bg-blue-400' : 'bg-green-400'
          }`}>
            <h4 className="font-bold text-sm sm:text-lg mb-3 sm:mb-4 flex items-center space-x-2">
              <Coffee size={20} />
              <span>FUN FACTS</span>
            </h4>
            <ul className="space-y-1 sm:space-y-2 font-bold text-xs sm:text-sm">
              <li>→ Coded at 3 AM</li>
              <li>→ Debugged with coffee</li>
              <li>→ Powered by curiosity</li>
              <li>→ Open source enthusiast</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t-4 border-black pt-6 sm:pt-8">
          <div className={`p-3 sm:p-4 border-4 border-black shadow-brutal inline-block ${
            isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
          }`}>
            <p className="font-bold flex items-center justify-center space-x-2 text-xs sm:text-base">
              <span>© 2025 ALEX CHEN • MADE WITH</span>
              <Heart size={16} className="text-red-400" />
              <span>AND A LOT OF</span>
              <Coffee size={16} className="text-yellow-400" />
            </p>
          </div>
          
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm font-bold">
            <p>PORTFOLIO v2.0.1 • STATUS: ONLINE • UPTIME: 99.9%</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;