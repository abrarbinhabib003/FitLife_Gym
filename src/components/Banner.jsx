import React from 'react';
import heroImage from '../assets/Hero_Image.png';

const Banner = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center p-8 lg:p-16 bg-[#1f1e1e] text-white">
 
      <div className="lg:ml-16 mt-8 lg:mt-0 max-w-lg">
        <h1 className="text-4xl lg:text-6xl leading-tight font-bold">
          Shape Your <span className="text-[#f15a29] font-brush-script">Body</span> With Us
        </h1>
        <p className="text-base lg:text-lg my-6">
          Join our gym today and transform your life. We offer top-class facilities, expert trainers, and personalized training programs.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-[#f15a29] rounded-full px-6 py-3 text-white hover:bg-[#e04e1f] transition">
            Join Now
          </button>
          <button className="border border-white rounded-full px-6 py-3 hover:bg-white hover:text-[#1f1e1e] transition">
            Download App
          </button>
        </div>
      </div>
   
      <div className="relative lg:mr-16">
        <img 
          src={heroImage} 
          alt="Fitness" 
          className="rounded-xl object-cover max-w-full"
        />
        <div className="absolute bottom-4 right-4 p-3 bg-black/60 rounded-md">
          <p className="text-[#f15a29] text-xl font-bold">4k+</p>
          <p className="text-sm">Happy Members</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
