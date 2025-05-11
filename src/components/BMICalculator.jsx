import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <section className="text-center text-white bg-[#1a1a1a] py-16 px-4">
      <h1 className="text-4xl mb-4">BMI Calculator</h1>
      <p className="text-gray-400 mb-6">Check your Body Mass Index</p>

      <div className="flex flex-wrap justify-center gap-10 bg-[#333] p-10 rounded-xl max-w-6xl mx-auto">
        <div className="bmi-chart text-left w-[300px]">
          <h2 className="text-xl mb-4">BMI Chart</h2>
          <table className="border-collapse border border-gray-600 w-full">
            <thead>
              <tr>
                <th className="border border-gray-600 px-4 py-2">Category</th>
                <th className="border border-gray-600 px-4 py-2">BMI Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Underweight</td>
                <td className="border border-gray-600 px-4 py-2">Less than 18.5</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Normal</td>
                <td className="border border-gray-600 px-4 py-2">18.5 – 24.9</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Overweight</td>
                <td className="border border-gray-600 px-4 py-2">25 – 29.9</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Obese</td>
                <td className="border border-gray-600 px-4 py-2">30 or more</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bmi-calculator w-[300px]">
          <h2 className="text-xl mb-4">Enter Your Info</h2>
          <form onSubmit={calculateBMI} className="flex flex-col gap-4">
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-[#3f3e3e] text-white p-2 rounded"
              required
            />
            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="bg-[#3f3e3e] text-white p-2 rounded"
              required
            />
            <button type="submit" className="bg-[#f15a29] text-white py-2 rounded hover:opacity-90">
              Calculate BMI
            </button>
            {bmi && <p className="mt-4 text-lg">Your BMI is <span className="text-[#f15a29]">{bmi}</span></p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
