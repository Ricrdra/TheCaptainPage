import React from 'react';
import Link from "next/link";

interface Props {
  href: string;
  name: string;
}

const NavLink: React.FC<Props> = ({href, name}) => {
  return (
    <li className='text-lg tracking-wider	navLink'>
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavLink;
