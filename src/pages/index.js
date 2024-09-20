import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import NavigationBar from '../components/NavigationBar';

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
