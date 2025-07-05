import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  GraduationCap,
  Briefcase,
  Trophy,
  Code2,
  BarChart2,
  BadgeCheck,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { label: "About", href: "#about", icon: User },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Achievements", href: "#achievements", icon: Trophy },
    { label: "Projects", href: "#projects", icon: Code2 },
    { label: "Skills", href: "#skills", icon: BarChart2 },
    { label: "Certifications", href: "#certifications", icon: BadgeCheck },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-lg shadow-md dark:bg-slate-800/70"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              Anis Shaikh
            </h1>
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 ${
                      isScrolled
                        ? "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  : "text-gray-200 hover:text-white"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-600 hover:text-blue-600 dark:text-gray-300"
                  : "text-white hover:text-gray-200"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-600 hover:text-blue-600 dark:text-gray-300"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-slate-800 shadow-lg border-t dark:border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-slate-700 rounded-md transition-colors duration-200"
                  >
                    <Icon size={18} className="mr-3" />
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
