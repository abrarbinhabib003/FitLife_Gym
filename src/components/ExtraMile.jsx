import React from 'react';
import extramileImage from '../assets/run.jpg';

const ExtraMile = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center bg-[#2c2c2c] text-white my-16 mx-4 lg:mx-32 p-8 lg:p-12 rounded-2xl shadow-lg">
    
      <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-4">Go The Extra Mile</h2>
        <p className="text-base lg:text-lg leading-relaxed">
          Success in fitness requires discipline, dedication, and a willingness to exceed limits. We're here to help you reach new heights — every step of the way.
        </p>
      </div>


      <div className="lg:w-1/2 flex justify-center">
        <img
          src={extramileImage}
          alt="Go The Extra Mile"
          className="rounded-xl w-full max-w-md object-cover"
        />
      </div>
    </section>
  );
};

export default ExtraMile;
