import React from 'react';
import trainer1 from '../assets/trainer1.png';
import trainer2 from '../assets/trainer2.png';
import trainer3 from '../assets/trainer3.png';
import trainer4 from '../assets/trainer4.png';
import trainer5 from '../assets/trainer5.png';
import trainer6 from '../assets/trainer6.png';

const team = [
  { name: 'John Doe', role: 'Fitness Trainer', img: trainer1 },
  { name: 'Jane Smith', role: 'Nutritionist', img: trainer2 },
  { name: 'Mike Johnson', role: 'Yoga Expert', img: trainer3 },
  { name: 'Emily Davis', role: 'Strength Coach', img: trainer4 },
  { name: 'Alex Brown', role: 'Cardio Specialist', img: trainer5 },
  { name: 'Sophia Lee', role: 'Wellness Coach', img: trainer6 },
];

const Team = () => {
  return (
    <section className="text-center py-20 bg-[#1a1a1a] text-white px-6">
      <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
      <p className="text-lg text-gray-400 mb-12">Experts guiding you at every step</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-xl bg-[#2a2a2a] transition-transform transform hover:scale-105"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-[#f15a29]">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
