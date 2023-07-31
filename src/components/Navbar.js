/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  UilArrowRight,
  UilMicrophone,
  UilSetting,
} from '@iconscout/react-unicons';

const Navbar = () => (
  <div className="text-white w-full flex items-center flex-row justify-between p-5 bg-slate-800">
    <Link to="/">
      <UilArrowRight />
    </Link>
    <h1 className=" text-white font-medium text-xl">Countries</h1>
    <div className="flex flex-row items-center px-2 mx-1">
      <UilMicrophone
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125 mx-2"
      />
      <UilSetting
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-125"
      />
    </div>
  </div>
);
export default Navbar;
