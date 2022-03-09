import React from 'react';
import Image from 'next/image';

interface SocialElementProps {
  item: SocialMedia
}

const SocialElement: React.FC<SocialElementProps> = ({item}) => {
  return (
    <div className='w-1/4 '>
      <a href={item.url} target="_blank">

        <Image src={item.icon} alt={item.name} width={"64px"} height={"64px"} layout="responsive"/>
      </a>

    </div>
  );
};

export default SocialElement;
