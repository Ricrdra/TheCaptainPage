import React from 'react';
import Contact from "@components/Main/Contact";
import Skills from "@components/Main/Skills";

const Main = () => {
  return (
    <section className='mt-16 grid grid-cols-2'>
      <Contact/>
      <Skills/>
    </section>
  );
};

export default Main;
