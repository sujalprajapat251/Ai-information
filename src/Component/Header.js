import React, { useState } from 'react';
import { IoIosArrowDown, IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
    <header className="border-gray-800 bg-[#060606] text-[#9aa0a6] relative">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-5">
        <div className="flex items-center space-x-1 text-lg font-medium gap-10">
          <div className='flex items-center space-x-1 text-[#f1f3f4]'>
            <span className="text-sm sm:text-base">Google</span>
            <span className="text-base sm:text-lg">DeepMind</span>
            <button className="text-xs sm:text-sm"><IoIosArrowDown /></button>
          </div>
          <nav className="hidden lg:flex space-x-4 text-sm">
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">Models</a>
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">Research</a>
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">Science</a>
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] hover:rounded-full py-2 px-4 font-medium transition">About</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <button className="bg-[rgba(241,243,244,0.08)] font-medium px-3 lg:px-4 py-1.5 rounded-full text-xs sm:text-sm hover:bg-[rgba(241,243,244,0.12)] transition">Build with Gemini</button>
          <button className="bg-[rgba(241,243,244,0.08)] font-medium px-3 lg:px-4 py-1.5 rounded-full text-xs sm:text-sm hover:bg-[rgba(241,243,244,0.12)] transition">★ Try Gemini</button>
          <button className="bg-[rgba(241,243,244,0.08)] p-2 rounded-full hover:bg-[rgba(241,243,244,0.12)] transition"><IoIosSearch /></button>
        </div>
        <div className="flex md:hidden items-center space-x-2">
          <button className="bg-[rgba(241,243,244,0.08)] p-2 rounded-full hover:bg-[rgba(241,243,244,0.12)] transition"><IoIosSearch /></button>
          <button onClick={toggleMobileMenu} className="bg-[rgba(241,243,244,0.08)] p-2 rounded-full hover:bg-[rgba(241,243,244,0.12)] transition">{isMobileMenuOpen ? <IoIosClose /> : <IoIosMenu />}</button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#060606] border-t border-gray-800 z-50">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] rounded-lg py-3 px-4 font-medium transition text-sm">Models</a>
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] rounded-lg py-3 px-4 font-medium transition text-sm">Research</a>
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] rounded-lg py-3 px-4 font-medium transition text-sm">Science</a>
            <a href="#" className="hover:bg-[rgba(241,243,244,0.08)] rounded-lg py-3 px-4 font-medium transition text-sm">About</a>
            <div className="border-t border-gray-800 mt-4 pt-4 space-y-2">
              <button className="w-full bg-[rgba(241,243,244,0.08)] font-medium py-3 px-4 rounded-lg text-sm hover:bg-[rgba(241,243,244,0.12)] transition">Build with Gemini</button>
              <button className="w-full bg-[rgba(241,243,244,0.08)] font-medium py-3 px-4 rounded-lg text-sm hover:bg-[rgba(241,243,244,0.12)] transition">★ Try Gemini</button>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  )
}

export default Header;
