import { useState } from 'react';
import W from '../assets/W.png';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-scroll';
import coloredmenu from '../assets/coloredlogo.png';
import close from '../assets/close.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full flex items-center justify-between px-10 py-4 font-semibold text-lg text-[#00e0ff] bg-gradient-to-r from-[#0f202780] via-[#1e3c6480] to-[#2c536480] backdrop-blur-md border-b border-[#00e0ff] shadow-md">

      {/* Preload images */}
      <img src={coloredmenu} alt="menu preload" className="hidden" />
      <img src={close} alt="close preload" className="hidden" />

      {/* Logo */}
      <img src={W} alt="Logo" className="h-12 w-16 object-cover sm:w-12 sm:h-12" />

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <Link className="mx-4 cursor-pointer transition-all hover:text-[#e0faff] hover:pb-2 hover:border-b-4 border-[#e0faff]" to="intro" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
        <Link className="mx-4 cursor-pointer transition-all hover:text-[#e0faff] hover:pb-2 hover:border-b-4 border-[#e0faff]" to="skills" spy={true} smooth={true} offset={-40} duration={500}>
          Skills
        </Link>
        <Link className="mx-4 cursor-pointer transition-all hover:text-[#e0faff] hover:pb-2 hover:border-b-4 border-[#e0faff]" to="works" spy={true} smooth={true} offset={-80} duration={500}>
          Projects
        </Link>
        <Link className="mx-4 cursor-pointer transition-all hover:text-[#e0faff] hover:pb-2 hover:border-b-4 border-[#e0faff]" to="contactPage" spy={true} smooth={true} offset={-80} duration={500}>
          Contact
        </Link>
      </div>

      {/* CV Download Button (hidden on small screens) */}
      <a href="/portfolio/cv.pdf" download="cv.pdf" className="hidden md:inline-block w-[100px]">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium bg-[#00e0ff] text-[#0f2027] hover:bg-gray-100 transition-colors duration-300">
          <HiOutlineDocumentText /> CV
        </button>
      </a>

      {/* Mobile Menu Toggle */}
      <img
        src={!showMenu ? coloredmenu : close}
        alt="Toggle menu"
        className="md:hidden h-8 w-8 cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle mobile menu"
      />

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="absolute top-16 right-8 z-20 flex flex-col p-2 min-w-[15rem] bg-gradient-to-r from-[#0f2027] via-[#1e3c64] to-[#0f2027] text-white rounded-xl border-[1.5px] border-[#00e0ff]">
          <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)} className="bg-[#2c5364] text-white p-2 my-1 rounded hover:bg-[#4167e2]">
            Home
          </Link>
          <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)} className="bg-[#2c5364] text-white p-2 my-1 rounded hover:bg-[#4167e2]">
            Skills
          </Link>
          <Link to="works" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)} className="bg-[#2c5364] text-white p-2 my-1 rounded hover:bg-[#4167e2]">
            Projects
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)} className="bg-[#2c5364] text-white p-2 my-1 rounded hover:bg-[#4167e2]">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
