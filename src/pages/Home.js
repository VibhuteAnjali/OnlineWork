import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import ForTeams from '../components/ForTeams/ForTeams';
import Blog from '../components/Blog/Blog';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <ForTeams />
      <Blog />
    </>
  );
};

export default Home;
