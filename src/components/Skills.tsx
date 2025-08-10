import React from 'react';
import { Code, Wrench, Cpu, Star, Rocket, Satellite, Moon } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: 'PROGRAMMING LANGUAGES',
      icon: Code,
      color: isDarkMode ? 'bg-green-400' : 'bg-orange-400',
      skills: [
        { name: 'C/C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'Verilog/VHDL', level: 70 }
      ]
    },
    {
      title: 'FRAMEWORKS & TOOLS',
      icon: Wrench,
      color: isDarkMode ? 'bg-orange-400' : 'bg-blue-400',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Arduino/ESP32', level: 90 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'Docker', level: 70 }
      ]
    },
    {
      title: 'HARDWARE & SYSTEMS',
      icon: Cpu,
      color: isDarkMode ? 'bg-blue-400' : 'bg-purple-400',
      skills: [
        { name: 'Digital Design', level: 85 },
        { name: 'PCB Design', level: 75 },
        { name: 'Embedded Systems', level: 80 },
        { name: 'Linux/Unix', level: 85 },
        { name: 'FPGA Programming', level: 70 }
      ]
    }
  ];

  const levelToLabel = (level: number) => (level >= 85 ? 'Advanced' : level >= 70 ? 'Proficient' : 'Intermediate');

  return (
    <section id="skills" className={`py-12 sm:py-20 px-4 relative overflow-hidden ${
      isDarkMode ? 'bg-black bg-grid-subtle-dark text-white' : 'bg-white bg-grid-subtle-light text-black'
    }`}>
      {/* Gentle space icon layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-0">
        <Star size={16} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[9%] top-[24%] animate-space-drift-slow`} />
        <Moon size={20} className={`${isDarkMode ? 'text-green-300' : 'text-blue-600'} opacity-20 absolute left-[75%] top-[22%] animate-space-drift-med`} />
        <Satellite size={18} className={`${isDarkMode ? 'text-orange-300' : 'text-green-500'} opacity-20 absolute left-[18%] top-[80%] animate-space-drift-med`} />
        <Rocket size={20} className={`${isDarkMode ? 'text-blue-300' : 'text-purple-500'} opacity-20 absolute left-[85%] top-[70%] animate-space-drift-slow`} />
        <Star size={14} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[40%] top-[14%] animate-space-drift-slow`} />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            SKILLS.EXE
          </h2>
          <div className={`w-32 h-2 mx-auto ${
            isDarkMode ? 'bg-green-400' : 'bg-orange-400'
          }`}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-2 transition-all duration-300 ${
              isDarkMode ? 'bg-white text-black bg-grid-subtle-light' : 'bg-gray-100 text-black bg-grid-subtle-light'
            }`}>
              <div className={`${category.color} text-black p-3 sm:p-4 border-b-4 border-black flex items-center space-x-3`}>
                <category.icon size={24} />
                <h3 className="font-bold text-sm sm:text-lg">{category.title}</h3>
              </div>
              
              <div className="p-4 sm:p-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4 sm:mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-xs sm:text-sm">{skill.name}</span>
                      <span className={`font-bold text-xs sm:text-sm px-2 py-1 border border-black ${category.color}`}>{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className={`w-full border-2 border-black ${
                      isDarkMode ? 'bg-gray-200' : 'bg-gray-300'
                    }`}>
                      <div 
                        className={`${category.color} h-3 sm:h-4 transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Descriptive Skill Level */}
                    <div className={`mt-2 text-xs sm:text-sm font-bold ${
                      isDarkMode ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      LEVEL:
                      <span className={`ml-2 inline-block px-2 py-0.5 border-2 border-black ${category.color} text-black`}>
                        {levelToLabel(skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className={`text-black p-4 sm:p-6 border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 ${
            isDarkMode ? 'bg-green-400' : 'bg-orange-400'
          }`}>
            <h4 className="font-bold text-lg sm:text-xl mb-4">CURRENT FOCUS</h4>
            <ul className="space-y-2 font-bold text-sm sm:text-base">
              <li>→ Machine Learning & AI</li>
              <li>→ IoT Development</li>
              <li>→ Full-Stack Web Development</li>
              <li>→ Computer Vision</li>
            </ul>
          </div>
          
          <div className={`text-black p-4 sm:p-6 border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 ${
            isDarkMode ? 'bg-orange-400' : 'bg-green-400'
          }`}>
            <h4 className="font-bold text-lg sm:text-xl mb-4">LEARNING NEXT</h4>
            <ul className="space-y-2 font-bold text-sm sm:text-base">
              <li>→ Rust Programming</li>
              <li>→ Quantum Computing</li>
              <li>→ Advanced FPGA Design</li>
              <li>→ Cloud Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;