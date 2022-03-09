import React from 'react';
import Link from "next/link";

const Title = () => {
  return (
    <div className='col-span-2 flex justify-center items-center'>
      <Link href='/' passHref>
        <a href="/">
          <h1 className='font-bold tracking-wide title text-center text-4xl'>
            Captain Run
          </h1>
        </a>
      </Link>
    </div>
  );
};

export default Title;
