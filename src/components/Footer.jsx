import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white pt-10">
      <div className="flex justify-between max-w-6xl mx-auto px-4 flex-wrap">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl italic text-[#f15a29] mb-4">FitZone</h2>
          <p className="text-sm leading-6">FitZone is dedicated to helping you reach your fitness goals through expert guidance, motivational coaching, and a supportive community.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-between">
          <div className="ml-10">
            <h3 className="text-2xl mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-[#f15a29]">About</a></li>
              <li><a href="#" className="hover:text-[#f15a29]">Careers</a></li>
              <li><a href="#" className="hover:text-[#f15a29]">Contact</a></li>
            </ul>
          </div>
          <div className="ml-10">
            <h3 className="text-2xl mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-[#f15a29]">Blog</a></li>
              <li><a href="#" className="hover:text-[#f15a29]">Help Center</a></li>
              <li><a href="#" className="hover:text-[#f15a29]">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-600 w-11/12 mx-auto" />
      <div className="text-center pb-4 text-sm">
        <p>&copy; 2025 FitZone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
