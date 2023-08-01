/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UilSearch, UilArrowRight } from '@iconscout/react-unicons';
import Navbar from './Navbar';
import { fetchCountryData } from '../redux/country/countrySlice';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.country);

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex items-center flex-col text-white bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 min-h-screen">
      <Navbar />
      <div className="flex flex-row items-center justify-start my-5 mx-auto">
        <input
          type="text"
          placeholder="search a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-lg py-2 pr-15 pl-3 outline-none bg-white text-black placeholder:capitalize capitalize"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer px-1 mx-3 transition ease-out hover:scale-125"
        />
      </div>
      <div className="container m-2 grid grid-flow-row items-center border-spacing-1">
        {filteredCountries.map((country) => (
          <Link
            to={`/countries/${country.name}`}
            key={country.name}
            className="container-card"
          >
            <UilArrowRight size={25} className="flex items-end justify-end" />
            <img src={country.flag} alt={country.name} className="w-fit" />
            <div className="flex items-end flex-col justify-end">
              <h2 className="font-medium text-xl">{country.name}</h2>
              <h2 className="country-population">{`Population: ${country.population}`}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
