import React from 'react';
import Header from '../components/Header';
import MiddlePage from '../components/MiddlePage';

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Header scrollToSection={scrollToSection}></Header>
      <MiddlePage id = "middleSection"></MiddlePage>
    </>
  )
}

export default Home;