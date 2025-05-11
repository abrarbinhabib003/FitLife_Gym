import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Habits from './components/Habits';
import ExtraMile from './components/ExtraMile';
import Team from './components/Team';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Habits />
      <ExtraMile />
      <Team />
      <BMICalculator />
      <Footer />
    </>
  );
};

export default App;
