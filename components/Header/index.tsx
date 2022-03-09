import React from 'react';
import Title from "@components/Header/Title";
import Navigation from "@components/Header/Navigation";

const Header = () => {
  return (
    <header className='select-none w-full bg-primary py-5 px-4 grid grid-cols-5 text-primary shadow-black shadow-xl'>
      <Title/>
      <Navigation/>
    </header>
  );
};

export default Header;
