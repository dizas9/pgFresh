import React from 'react';
import { Navdata } from './Navdata';

export default function Header() {
  return (
    <div className="bg-bgHeader w-full h-[5rem] flex items-center fixed z-20">
      <div className="flex relative  h-[5rem] w-24 ml-[3%]">
        <p className="font-Righteous text-white text-4xl absolute top-3">P</p>
        <p className="font-Righteous text-white text-3xl absolute top-6 left-3">
          g
        </p>
      </div>

      <div className="relative xl:w-[15%]">
        <input type="text" className="h-10 w-[100%] rounded-full" />
        <img src="image/search.png" alt="" className="w-7 absolute top-2" />
      </div>

      <div className="flex relative left-[5%] text-white text-[25px] font-Righteous xl:gap-32 lg:gap-16">
        {Navdata.map((navlink, navlinkIndex) => (
          <li className="list-none" key={navlinkIndex}>
            <a href={navlink.href} className="">
              {navlink.name}
            </a>
          </li>
        ))}
      </div>

      <div className="absolute lg:right-[10%]">
        <img src="image/cart.png" alt="" className="w-10" />
      </div>

      <div className="absolute lg:right-[2%] text-white font-Righteous">
        <button className="border-[0.1rem] px-4 rounded-full text-[22px]">
          Log In
        </button>
      </div>
    </div>
  );
}
