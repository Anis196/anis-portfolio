import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import myPic from './mypic.jpg'; // Adjust the path to your image


const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "AI/ML Enthusiast",
    "Computer Engineering Student",
    "Competitive Programmer",
    "Research Scholar",
    "Java Backend Developer",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          {/* Profile Image with Glow */}
          <img
            src={myPic}// Place your image in /public or adjust this path accordingly
            alt="Anis Shaikh"
            className="w-60 h-60 rounded-full border-3 border-white shadow-xl mb-4 object-cover animate-glow animate-fade-in-up"
          />

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Anis Shaikh
            </span>
          </h1>

          {/* Typing Effect */}
          <div className="h-8 mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg sm:text-xl text-neutral-300 dark:text-neutral-200
 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            A Final Year Computer Engineering student at JSPM's RSCOE with expertise in
            AI/ML, competitive programming, and innovative technology solutions.
            Passionate about creating impactful applications and advancing
            research.
          </p>
        </div>

        {/* Stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
  {/* CGPA */}
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-award text-yellow-400"
      >
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    </div>
    <p className="text-3xl font-bold text-white mb-1">9.7</p>
    <p className="text-neutral-300 dark:text-neutral-200
 text-sm font-medium">CGPA</p>
  </div>

  {/* AI/ML Hours */}
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center mb-3">
      <span className="text-3xl text-green-400">⚡</span>
    </div>
    <p className="text-3xl font-bold text-white mb-1">Leadership</p>
    <p className="text-neutral-300 dark:text-neutral-200
 text-sm font-medium">Lead 10+ events</p>
  </div>

  {/* Problems Solved */}
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-brain text-purple-400"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
      </svg>
    </div>
    <p className="text-3xl font-bold text-white mb-1">500+</p>
    <p className="text-neutral-300 dark:text-neutral-200
 text-sm font-medium">Problems Solved</p>
  </div>

  {/* Hackathon Achievement */}
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-award text-orange-400"
      >
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    </div>
    <p className="text-3xl font-bold text-white mb-1">2nd Rank</p>
    <p className="text-neutral-300 dark:text-neutral-200
 text-sm font-medium">National Hackathon</p>
  </div>
</div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://github.com/anis196"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white"
          >
            <Github size={19} className="mr-2" />
            View GitHub
          </a>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 dark:border-slate-300 dark:hover:bg-slate-300 dark:hover:text-slate-900"
          >
            <ExternalLink size={20} className="mr-2" />
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-white/70 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
