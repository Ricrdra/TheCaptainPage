import React from 'react';
import About from '@components/Hero/About';
import Image from 'next/image'

const Hero = () => {
  return (
    <div
      className='mt-16 grid space-y-4 place-items-center w-[80%] mx-auto text-primary md:grid-cols-5  md:space-x-16'>
      <div className='overflow-hidden rounded-xl captain-img w-full md:col-span-2 lg:col-span-1 max-h-[400px]'>
        <Image alt={'The Captain\'s Image'} src='/images/me.jpg' width={"64px"} height={"64px"} layout='responsive'/>
      </div>
      <About/>
    </div>
  );
};

export default Hero;
