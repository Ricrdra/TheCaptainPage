import React from 'react';
import NavLink from '@components/Header/NavLink';

const Navigation = () => {
  return (
    <nav className='w-full h-full col-span-3 '>
      <ul className='flex justify-evenly h-full items-center'>
        <NavLink href='/' name='About'/>
        <NavLink href='/' name='Projects'/>
        <NavLink href='/' name='Blog'/>
      </ul>
    </nav>
  );
};

export default Navigation;
