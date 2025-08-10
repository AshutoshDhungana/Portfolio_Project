import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, Copy, CheckCircle2, Send, Star, Rocket, Satellite, Moon } from 'lucide-react';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactEmail = 'hello@alexchen.dev';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`py-12 sm:py-20 px-4 relative overflow-hidden ${
      isDarkMode ? 'bg-black bg-grid-subtle-dark text-white' : 'bg-white bg-grid-subtle-light text-black'
    }`}>
      {/* Gentle space icon layer */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none z-0">
        <Star size={16} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[10%] top-[26%] animate-space-drift-slow`} />
        <Moon size={20} className={`${isDarkMode ? 'text-green-300' : 'text-blue-600'} opacity-20 absolute left-[78%] top-[20%] animate-space-drift-med`} />
        <Satellite size={18} className={`${isDarkMode ? 'text-orange-300' : 'text-green-500'} opacity-20 absolute left-[20%] top-[82%] animate-space-drift-med`} />
        <Rocket size={20} className={`${isDarkMode ? 'text-blue-300' : 'text-purple-500'} opacity-20 absolute left-[84%] top-[68%] animate-space-drift-slow`} />
        <Star size={14} className={`${isDarkMode ? 'text-green-400' : 'text-orange-500'} opacity-20 absolute left-[44%] top-[12%] animate-space-drift-slow`} />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            CONTACT_SYS
          </h2>
          <div className={`w-32 h-2 mx-auto ${
            isDarkMode ? 'bg-green-400' : 'bg-orange-400'
          }`}></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg font-bold">
            Ping me like it’s 1999 — ASCII vibes, real replies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: Contact Card */}
          <div className={`border-4 border-black shadow-brutal ${
            isDarkMode ? 'bg-white bg-grid-subtle-light text-black' : 'bg-gray-100 bg-grid-subtle-light text-black'
          }`}>
            <div className={`p-4 sm:p-6 border-b-4 border-black ${
              isDarkMode ? 'bg-green-400 text-black' : 'bg-orange-400 text-black'
            }`}>
              <div className="flex items-center space-x-2">
                <Mail size={22} />
                <h3 className="font-bold text-lg">DIRECT LINE</h3>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div>
                <div className="font-bold text-xs sm:text-sm opacity-70">EMAIL</div>
                <div className="flex items-center justify-between mt-1">
                  <a href={`mailto:${contactEmail}`} className={`font-bold break-all ${isDarkMode ? 'text-green-600' : 'text-orange-400'} underline`}>
                    {contactEmail}
                  </a>
                  <button
                    onClick={handleCopy}
                    className={`ml-3 p-2 border-2 border-black text-black font-bold shadow-brutal btn-brutal flex items-center space-x-1 ${
                      isDarkMode ? 'bg-green-400' : 'bg-orange-400'
                    }`}
                    aria-label="Copy email address"
                  >
                    {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    <span className="text-xs">{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 border-2 border-black shadow-brutal ${
                  isDarkMode ? 'bg-gray-900 bg-grid-subtle-dark text-white' : 'bg-white bg-grid-subtle-light text-black'
                }`}>
                  <div className="font-bold text-xs opacity-70">LOCATION</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin size={16} className={isDarkMode ? 'text-green-400' : 'text-orange-500'} />
                    <span className="font-bold text-sm">Kathmandu, NP</span>
                  </div>
                </div>

                <div className={`p-3 border-2 border-black shadow-brutal ${
                  isDarkMode ? 'bg-gray-900 bg-grid-subtle-dark text-white' : 'bg-white bg-grid-subtle-light text-black'
                }`}>
                  <div className="font-bold text-xs opacity-70">STATUS</div>
                  <div className="mt-1 font-bold text-sm">OPEN TO OPPORTUNITIES</div>
                </div>
              </div>

              <div>
                <div className="font-bold text-xs sm:text-sm opacity-70 mb-2">SOCIALS</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className={`text-black px-3 py-2 font-bold text-xs border-2 border-black shadow-brutal btn-brutal flex items-center space-x-1 ${
                      isDarkMode ? 'bg-green-400' : 'bg-orange-400'
                    }`}
                  >
                    <Github size={16} />
                    <span>GITHUB</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yourusername/"
                    target="_blank"
                    rel="noreferrer"
                    className={`text-black px-3 py-2 font-bold text-xs border-2 border-black shadow-brutal btn-brutal flex items-center space-x-1 ${
                      isDarkMode ? 'bg-orange-400' : 'bg-green-400'
                    }`}
                  >
                    <Linkedin size={16} />
                    <span>LINKEDIN</span>
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className={`text-black px-3 py-2 font-bold text-xs border-2 border-black shadow-brutal btn-brutal flex items-center space-x-1 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-purple-400'
                    }`}
                  >
                    <Twitter size={16} />
                    <span>TWITTER</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`border-4 border-black shadow-brutal ${
            isDarkMode ? 'bg-white bg-grid-subtle-light text-black' : 'bg-gray-100 bg-grid-subtle-light text-black'
          }`}>
            <div className={`p-4 sm:p-6 border-b-4 border-black ${
              isDarkMode ? 'bg-orange-400 text-black' : 'bg-green-400 text-black'
            }`}>
              <div className="flex items-center space-x-2">
                <Send size={20} />
                <h3 className="font-bold text-lg">SEND A MESSAGE</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
              <div>
                <label className="font-bold text-xs sm:text-sm" htmlFor="name">NAME</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 w-full p-3 border-2 border-black font-bold outline-none ${
                    isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
                  }`}
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="font-bold text-xs sm:text-sm" htmlFor="email">EMAIL</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 w-full p-3 border-2 border-black font-bold outline-none ${
                    isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
                  }`}
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="font-bold text-xs sm:text-sm" htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`mt-1 w-full p-3 border-2 border-black font-bold outline-none resize-y ${
                    isDarkMode ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
                  }`}
                  placeholder="Tell me about your project, idea, or question..."
                />
              </div>

              <div className="flex items-center justify-between">
                <div className={`font-bold text-xs ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                  • No spam. No bots. Just bytes.
                </div>
                <button
                  type="submit"
                  className={`text-black px-4 py-3 font-bold text-sm border-2 border-black shadow-brutal btn-brutal flex items-center space-x-2 ${
                    isDarkMode ? 'bg-green-400' : 'bg-orange-400'
                  }`}
                >
                  <Send size={16} />
                  <span>SEND</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
