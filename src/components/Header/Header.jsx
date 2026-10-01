import { useState, useEffect } from "react";
import ScrollIndicator from "../Utilities/ScrollIndicator";
import GoToTop from "../Utilities/GoToTop";
import SideBarNavigation from "./Navigation";
import { images } from "../../constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeToggled, setIsThemeToggled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleThemeColor = () => {
    setIsThemeToggled(!isThemeToggled);
    document.body.classList.toggle("userClick");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      {/* Header Sidebar */}
      <header
        id="header"
        className={`fixed top-0 z-1000 h-screen w-full md:w-140 bg-(--color-leftside) shadow-(--box-shadow-card) flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "left-0" : "-left-full md:left-0"
        }`}
      >
        <div
          className="user flex flex-col items-center text-center"
          title="Taiseen - Fullstack Developer"
        >
          <img
            src={images.me}
            alt="taiseen"
            loading="lazy"
            className="h-[17rem] w-[17rem] rounded-full object-cover mb-4 border-[0.3rem] border-[var(--color-yellow)]"
          />
          <h3 className="name text-[3.5rem] text-[var(--color-white)]">
            Taiseen
          </h3>
          <p className="post text-[2rem] text-[var(--color-white)]">
            ⚙️ Fullstack Developer 🛠️
          </p>
        </div>

        <SideBarNavigation />

        <div className="utilities relative w-full flex flex-col items-center gap-4 mt-8">
          <ScrollIndicator />
          <GoToTop />
        </div>
      </header>

      {/* Theme Toggling Button - Positioned to the LEFT of menu button on mobile */}
      <div
        id="themeToggling"
        onClick={toggleThemeColor}
        className="fixed top-8 right-16 md:right-40 lg:right-8 w-18 h-18 bg-(--color-leftside) rounded-[0.3rem] cursor-pointer z-1200 flex items-center justify-center transition-all duration-300 hover:scale-105"
      >
        <i
          className={`fas ${isThemeToggled ? "fa-moon" : "fa-sun"} text-[2.5rem] text-(--color-yellow) transition-transform duration-300 ${
            isThemeToggled ? "rotate-360" : "rotate-180"
          }`}
        ></i>
      </div>

      {/* Mobile Menu Toggle Button - Rightmost position */}
      <div
        id="menu"
        className={`fas fa-bars fixed top-8 right-8 p-4 bg-(--color-leftside) rounded-[0.3rem] cursor-pointer z-1000 hidden md:flex items-center justify-center text-[2.5rem] transition-colors duration-300 ${
          isMenuOpen ? "text-[tomato]" : "text-(--color-yellow)"
        }`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Header;
