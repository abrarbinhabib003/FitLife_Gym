import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1f1e1e] px-6 md:px-20 py-4 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-4xl md:text-5xl text-[#f15a29] font-bold italic">FitLife</h1>
        <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 text-base md:text-lg border border-[#4d4c4c] rounded-full px-4 py-2">
          <li><a href="#" className="hover:bg-[#f15a29] px-4 py-2 rounded-full">Home</a></li>
          <li><a href="#" className="hover:bg-[#f15a29] px-4 py-2 rounded-full">About</a></li>
          <li><a href="#" className="hover:bg-[#f15a29] px-4 py-2 rounded-full">BMI</a></li>
          <li><a href="#" className="hover:bg-[#f15a29] px-4 py-2 rounded-full">Team</a></li>
          <li><a href="#" className="hover:bg-[#f15a29] px-4 py-2 rounded-full">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
