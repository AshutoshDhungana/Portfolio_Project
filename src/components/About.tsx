import React from 'react';
import { BrainCircuit as Circuit, Lightbulb, Rocket, Zap, User } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-12 sm:py-20 px-4 ${
      isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
            isDarkMode ? 'text-black' : 'text-white'
          }`}>
            ABOUT_ME.TXT
          </h2>
          <div className={`w-32 h-2 mx-auto ${
            isDarkMode ? 'bg-orange-400' : 'bg-green-400'
          }`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className={`p-4 sm:p-6 border-4 shadow-brutal mb-6 sm:mb-8 ${
              isDarkMode 
                ? 'bg-black text-green-400 border-black' 
                : 'bg-white text-orange-500 border-white'
            }`}>
              <div className="text-sm mb-2">
                <span className={isDarkMode ? 'text-orange-400' : 'text-blue-500'}>[INFO]</span> Loading profile...
              </div>
              <div className="text-sm">
                <span className={isDarkMode ? 'text-white' : 'text-black'}>Status:</span> 
                <span className={isDarkMode ? 'text-green-400' : 'text-orange-500'}> ACTIVE</span>
              </div>
              <div className="text-sm">
                <span className={isDarkMode ? 'text-white' : 'text-black'}>Mode:</span> 
                <span className={isDarkMode ? 'text-green-400' : 'text-orange-500'}> LEARNING</span>
              </div>
            </div>

            <p className="text-base sm:text-lg mb-4 sm:mb-6 font-bold">
              Hey there! I'm a passionate Computer Engineering undergraduate who lives and breathes technology. 
              From designing digital circuits to developing full-stack applications, I love solving complex problems 
              and building innovative solutions.
            </p>

            <p className="text-base sm:text-lg mb-6 sm:mb-8 font-bold">
              Currently diving deep into embedded systems, machine learning, and modern web technologies. 
              When I'm not coding, you'll find me tinkering with hardware projects or exploring the latest 
              tech trends.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: Circuit, label: 'HARDWARE DESIGN', color: 'bg-green-400' },
                { icon: Zap, label: 'SOFTWARE DEV', color: 'bg-orange-400' },
                { icon: Lightbulb, label: 'PROBLEM SOLVER', color: 'bg-blue-400' },
                { icon: Rocket, label: 'INNOVATOR', color: 'bg-purple-400' }
              ].map((item, index) => (
                <div key={index} className={`${item.color} text-black p-3 sm:p-4 border-4 border-black shadow-brutal text-center hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200`}>
                  <item.icon size={24} className="mx-auto mb-2 sm:mb-2" />
                  <div className="font-bold text-xs sm:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Placeholder */}
          <div className="relative">
            <div className={`border-4 shadow-brutal p-8 sm:p-12 aspect-square flex items-center justify-center ${
              isDarkMode 
                ? 'bg-black border-black' 
                : 'bg-white border-white'
            }`}>
              {/* Photo Placeholder */}
              <div className={`w-full h-full border-4 border-dashed flex flex-col items-center justify-center ${
                isDarkMode 
                  ? 'border-green-400 bg-gray-900' 
                  : 'border-orange-400 bg-gray-100'
              }`}>
                <User size={64} className={`mb-4 ${
                  isDarkMode ? 'text-green-400' : 'text-orange-500'
                }`} />
                <div className={`text-center font-bold ${
                  isDarkMode ? 'text-green-400' : 'text-orange-500'
                }`}>
                  <div className="text-lg mb-2">YOUR PHOTO</div>
                  <div className="text-sm">GOES HERE</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-black p-2 border-4 border-black shadow-brutal transform rotate-12 ${
              isDarkMode ? 'bg-orange-400' : 'bg-green-400'
            }`}>
              <span className="font-bold text-xs sm:text-sm">CREATIVE</span>
            </div>
            <div className={`absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 text-black p-2 border-4 border-black shadow-brutal transform -rotate-12 ${
              isDarkMode ? 'bg-green-400' : 'bg-orange-400'
            }`}>
              <span className="font-bold text-xs sm:text-sm">DRIVEN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;