import React from 'react';
import habit1 from '../assets/image 2.png';
import habit2 from '../assets/image 3.png';
import habit3 from '../assets/image 4.png';
import habit4 from '../assets/image 5.png';


const habits = [
  { img: habit1, title: 'Eat Clean', desc: 'Nutritious food fuels performance.' },
  { img: habit2 , title: 'Train Hard', desc: 'Push yourself daily to grow stronger.' },
  { img: habit3, title: 'Stay Consistent', desc: 'Progress is built over time.' },
  { img: habit4, title: 'Rest & Recover', desc: 'Give your body time to grow and heal.' },
];

const Habits = () => {
  return (
    <section className="text-center py-20 px-4 bg-[#1a1a1a] text-white">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">Healthy Habits</h2>
      <p className="text-lg text-gray-400 mb-12">Build strong habits for a fit and balanced life.</p>

      <div className="flex justify-center gap-8 flex-wrap">
        {habits.map((habit, index) => (
          <div key={index} className="w-64 flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#f15a29]">
              <img
                src={habit.img}
                alt={habit.title}
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#f15a29]">{habit.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{habit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habits;
