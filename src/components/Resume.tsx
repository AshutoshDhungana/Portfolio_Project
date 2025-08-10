import React, { useState } from 'react';
import { Download, Eye, FileText, Calendar, MapPin, Mail, Star, Rocket, Satellite, Moon } from 'lucide-react';

interface ResumeProps {
  isDarkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ isDarkMode }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const experience = [
    {
      title: 'Software Engineering Intern',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: 'Jun 2024 - Aug 2024',
      points: [
        'Developed RESTful APIs using Node.js and Express, serving 10K+ daily requests',
        'Optimized database queries reducing response time by 40%',
        'Collaborated with cross-functional teams in Agile environment'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'UC Berkeley - Computer Vision Lab',
      location: 'Berkeley, CA',
      period: 'Jan 2024 - Present',
      points: [
        'Implemented deep learning models for image classification with 94% accuracy',
        'Published research findings in IEEE conference proceedings',
        'Mentored 3 undergraduate students in machine learning concepts'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'University of California, Berkeley',
      period: '2022 - 2026 (Expected)',
      gpa: '3.8/4.0',
      relevant: ['Data Structures & Algorithms', 'Computer Architecture', 'Machine Learning', 'Digital Systems Design']
    }
  ];

  return (
    <section id="resume" className={`py-16 sm:py-20 relative overflow-hidden ${isDarkMode ? 'bg-black bg-grid-subtle-dark' : 'bg-white bg-grid-subtle-light'}`}>
      {/* Gentle space icon layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-0">
        <Star size={16} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[8%] top-[22%] animate-space-drift-slow`} />
        <Moon size={20} className={`${isDarkMode ? 'text-green-300' : 'text-blue-600'} opacity-20 absolute left-[76%] top-[18%] animate-space-drift-med`} />
        <Satellite size={18} className={`${isDarkMode ? 'text-orange-300' : 'text-green-500'} opacity-20 absolute left-[18%] top-[78%] animate-space-drift-med`} />
        <Rocket size={20} className={`${isDarkMode ? 'text-blue-300' : 'text-purple-500'} opacity-20 absolute left-[86%] top-[64%] animate-space-drift-slow`} />
        <Star size={14} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[42%] top-[10%] animate-space-drift-slow`} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            [<span className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'}`}>RESUME</span>_DATA]
          </h2>
          <div className={`w-32 h-1 ${isDarkMode ? 'bg-green-400' : 'bg-orange-500'} mx-auto mb-8`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Actions */}
          <div className="lg:col-span-1">
            <div className={`border-4 p-6 sm:p-8 sticky top-24 ${isDarkMode ? 'bg-gray-900 bg-grid-subtle-dark border-cyan-400' : 'bg-gray-50 bg-grid-subtle-light border-blue-600'} shadow-brutal`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <FileText className={`w-6 h-6 mr-2 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                RESUME_ACTIONS
              </h3>
              
              <div className="space-y-4">
                <a href="/Alex_Chen_CV.pdf" download className={`w-full flex items-center justify-center space-x-2 px-6 py-4 font-bold border-4 border-black shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 ${isDarkMode ? 'bg-green-400' : 'bg-orange-400'} text-black`}>
                  <Download className="w-5 h-5" />
                  <span>DOWNLOAD_PDF</span>
                </a>
                
                <button
                  onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-4 font-bold border-4 shadow-brutal hover:shadow-brutal-hover transform hover:-translate-y-1 transition-all duration-200 ${isDarkMode ? 'border-magenta-400 text-magenta-400 hover:bg-magenta-400 hover:text-black' : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'}`}>
                  <Eye className="w-5 h-5" />
                  <span>PREVIEW_MODE</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className={`mt-8 border-t-4 ${isDarkMode ? 'border-cyan-400' : 'border-blue-600'} pt-6`}>
                <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>QUICK_CONTACT</h4>
                <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div className="flex items-center space-x-2">
                    <Mail className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-orange-500'}`} />
                    <span>alex.chen@berkeley.edu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className={`w-4 h-4 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Content */}
          <div className="lg:col-span-2">
            {/* Education */}
            <div className={`border-4 ${isDarkMode ? 'bg-gray-900 bg-grid-subtle-dark border-white' : 'bg-white bg-grid-subtle-light border-black'} shadow-brutal mb-8`}>
              <div className={`p-3 sm:p-4 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <h3 className="text-xl sm:text-2xl font-black">EDUCATION_LOG</h3>
              </div>
              <div className="p-6">
                {education.map((edu, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{edu.degree}</h4>
                        <p className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} font-bold`}>{edu.school}</p>
                      </div>
                      <div className="text-right">
                        <span className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} font-bold`}>{edu.period}</span>
                        <p className={`${isDarkMode ? 'text-magenta-400' : 'text-purple-600'} font-bold`}>GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {edu.relevant.map((course, i) => (
                        <span key={i} className={`px-3 py-1 border-2 ${isDarkMode ? 'border-green-400 text-green-400' : 'border-orange-500 text-orange-500'} text-sm font-bold`}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className={`border-4 ${isDarkMode ? 'bg-gray-900 bg-grid-subtle-dark border-white' : 'bg-white bg-grid-subtle-light border-black'} shadow-brutal`}>
              <div className={`p-3 sm:p-4 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <h3 className="text-xl sm:text-2xl font-black">EXPERIENCE_BUFFER</h3>
              </div>
              <div className="p-6">
                {experience.map((exp, index) => (
                  <div key={index} className={`mb-8 border-l-4 ${isDarkMode ? 'border-cyan-400' : 'border-blue-600'} pl-6`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{exp.title}</h4>
                        <p className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} font-bold`}>{exp.company}</p>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center`}>
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </p>
                      </div>
                      <span className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} font-bold flex items-center`}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} flex items-start`}>
                          <span className={`${isDarkMode ? 'text-magenta-400' : 'text-purple-600'} mr-2`}>&gt;</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Status */}
        <div className={`mt-12 border-4 ${isDarkMode ? 'border-green-400 bg-gray-900 bg-grid-subtle-dark' : 'border-orange-500 bg-gray-50 bg-grid-subtle-light'} p-6 shadow-brutal`}>
          <pre className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} font-mono text-sm`}>
            {`$ status --employment
> Status: ACTIVELY_SEEKING_OPPORTUNITIES
> Availability: Summer 2025 Internship
> Interests: Full-Stack Development, AI/ML, Hardware Integration
> Preferred_Location: Bay Area, Remote
$ _`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Resume;
