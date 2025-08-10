import React from 'react';
import { ExternalLink, Github, Cpu, Smartphone, Globe, Zap } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'SMART HOME IOT SYSTEM',
      description: 'ESP32-based home automation system with web interface and mobile app control.',
      tech: ['ESP32', 'React', 'Node.js', 'MQTT', 'MongoDB'],
      icon: Smartphone,
      color: 'bg-green-400',
      status: 'COMPLETED'
    },
    {
      title: 'CPU DESIGN IN VERILOG',
      description: 'MIPS-based 32-bit processor implementation with pipelining and hazard detection.',
      tech: ['Verilog', 'FPGA', 'Digital Design', 'Assembly'],
      icon: Cpu,
      color: 'bg-orange-400',
      status: 'COMPLETED'
    },
    {
      title: 'MACHINE LEARNING CLASSIFIER',
      description: 'Neural network for image classification with 94% accuracy on custom dataset.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Jupyter'],
      icon: Zap,
      color: 'bg-blue-400',
      status: 'COMPLETED'
    },
    {
      title: 'REAL-TIME CHAT APPLICATION',
      description: 'Full-stack web application with real-time messaging and file sharing.',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      icon: Globe,
      color: 'bg-purple-400',
      status: 'IN PROGRESS'
    },
    {
      title: 'AUTONOMOUS ROBOT NAVIGATION',
      description: 'Computer vision-based robot that navigates through obstacles using LIDAR.',
      tech: ['ROS', 'Python', 'OpenCV', 'Arduino', 'LIDAR'],
      icon: Cpu,
      color: 'bg-red-400',
      status: 'IN PROGRESS'
    },
    {
      title: 'BLOCKCHAIN VOTING SYSTEM',
      description: 'Secure voting application using smart contracts and cryptographic verification.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      icon: Globe,
      color: 'bg-yellow-400',
      status: 'PLANNED'
    }
  ];

  return (
    <section id="projects" className={`py-12 sm:py-20 px-4 ${
      isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
            isDarkMode ? 'text-black' : 'text-white'
          }`}>
            PROJECTS.DIR
          </h2>
          <div className={`w-32 h-2 mx-auto ${
            isDarkMode ? 'bg-orange-400' : 'bg-green-400'
          }`}></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg font-bold">
            A collection of my engineering projects and experiments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-2 transition-all duration-300 ${
              isDarkMode ? 'bg-gray-900 bg-grid-subtle-dark text-white' : 'bg-white bg-grid-subtle-light text-black'
            }`}>
              {/* Project Header */}
              <div className={`${project.color} text-black p-4 border-b-4 border-black`}>
                <div className="flex items-center justify-between">
                  <project.icon size={24} />
                  <span className={`text-xs font-bold px-2 py-1 border-2 border-black ${
                    project.status === 'COMPLETED' ? 'bg-green-500' :
                    project.status === 'IN PROGRESS' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-green-400' : 'text-orange-500'
                }`}>
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm mb-4 sm:mb-6 font-bold">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 sm:mb-6">
                  <div className={`text-xs font-bold mb-2 ${
                    isDarkMode ? 'text-orange-400' : 'text-green-400'
                  }`}>TECH STACK:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-2 py-1 text-xs font-bold border ${
                        isDarkMode 
                          ? 'bg-white text-black border-gray-300' 
                          : 'bg-black text-white border-gray-600'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button className={`text-black px-3 sm:px-4 py-2 font-bold text-xs sm:text-sm border-2 border-black transition-colors flex items-center justify-center space-x-1 ${
                    isDarkMode ? 'bg-green-400 hover:bg-green-300' : 'bg-orange-400 hover:bg-orange-300'
                  }`}>
                    <Github size={16} />
                    <span>CODE</span>
                  </button>
                  <button className={`text-black px-3 sm:px-4 py-2 font-bold text-xs sm:text-sm border-2 border-black transition-colors flex items-center justify-center space-x-1 ${
                    isDarkMode ? 'bg-orange-400 hover:bg-orange-300' : 'bg-green-400 hover:bg-green-300'
                  }`}>
                    <ExternalLink size={16} />
                    <span>DEMO</span>
                  </button>
                </div>
              </div>

              {/* Terminal Output */}
              <div className={`p-3 text-xs font-mono border-t-4 border-black ${
                isDarkMode 
                  ? 'bg-gray-900 text-green-400' 
                  : 'bg-gray-100 text-orange-500'
              }`}>
                <div>$ git status</div>
                <div className={isDarkMode ? 'text-white' : 'text-black'}>On branch main</div>
                <div className={isDarkMode ? 'text-green-300' : 'text-orange-300'}>Your branch is up to date</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className={`p-6 sm:p-8 border-4 border-black shadow-brutal ${
            isDarkMode ? 'bg-gray-900 bg-grid-subtle-dark text-white' : 'bg-white bg-grid-subtle-light text-black'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-green-400' : 'text-orange-500'
            }`}>
              MORE PROJECTS ON GITHUB
            </h3>
            <p className="mb-4 sm:mb-6 font-bold text-sm sm:text-base">
              Check out my GitHub profile for more projects and contributions!
            </p>
            <button className={`text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-lg border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2 mx-auto ${
              isDarkMode ? 'bg-orange-400' : 'bg-green-400'
            }`}>
              <Github size={24} />
              <span>VIEW ALL PROJECTS</span>
              <ExternalLink size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;