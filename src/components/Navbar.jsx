"use client";

import { useState, useEffect } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "categories",
        "popular-dishes",
        "features",
        "promo-cards",
        "contact",
      ];

      const scrollPos = window.scrollY + 100; // Offset for fixed navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "categories", label: "Categories" },
    { id: "popular-dishes", label: "Dishes" },
    { id: "features", label: "Features" },
    { id: "promo-cards", label: "Promo Cards" },
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // navbar height
      const bodyTop = document.body.getBoundingClientRect().top;
      const elementTop = element.getBoundingClientRect().top;
      const position = elementTop - bodyTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false); // close mobile menu
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-50/80 backdrop-blur-md shadow-lg py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg shadow-blue-500/30" />
          <span className="text-xl font-bold text-gray-900">FoodDash</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="relative py-2 text-lg font-medium"
            >
              <span
                className={
                  activeSection === id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-600"
                }
              >
                {label}
              </span>
              {activeSection === id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all ${
              activeSection === "contact" ? "ring-4 ring-blue-300/50" : ""
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-800 z-50"
        >
          {mobileMenuOpen ? <CgClose size={30} /> : <CgMenuRight size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute inset-x-0 top-0 bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pt-20 pb-8 px-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-2xl text-left font-medium ${
                    activeSection === id
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-lg font-semibold shadow-lg"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
