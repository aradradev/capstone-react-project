import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UilArrowLeft } from '@iconscout/react-unicons';

const DetailsPage = () => {
  const { countryName } = useParams();
  const countries = useSelector((state) => state.country.country);

  const country = countries.find((c) => c.name === countryName);

  if (!country) {
    return (
      <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-cyan-700 to-blue-700 min-h-screen">
        <div className="w-full p-5 bg-slate-800">
          <UilArrowLeft
            className="cursor-pointer"
            onClick={() => window.history.back()}
          />
        </div>
        <div className="m-5">
          <h1 className="text-4xl font-bold">Country not found</h1>
        </div>
      </div>
    );
  }

  const {
    capital, continent, flag, population, map, area,
  } = country;

  return (
    <div className="flex flex-col items-center text-white bg-gradient-to-br from-cyan-700 to-blue-700 min-h-screen">
      <div className=" flex flex-row items-center justify-between w-full p-5 bg-slate-800">
        <UilArrowLeft
          className="cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className=" text-white font-medium text-xl">Details</h1>
      </div>
      <div className="m-5 grid grid-cols-2 gap-4 w-11/12">
        {' '}
        <img src={flag} alt={countryName} className="w-64 h-auto mx-auto" />
        <h1 className="text-4xl font-bold col-span-2">{countryName}</h1>
        <div className="col-span-2 grid grid-cols-2 gap-4 mt-4">
          <div>
            <span className="font-bold">Capital:</span>
            {' '}
            {capital}
          </div>
          <div>
            <span className="font-bold">Continent:</span>
            {' '}
            {continent}
          </div>
          <div>
            <span className="font-bold">Population:</span>
            {' '}
            {population}
          </div>
          <div>
            <span className="font-bold">Area:</span>
            {' '}
            {area}
            {' '}
            sq km
          </div>
        </div>
        <div className="mt-6 col-span-2 w-full">
          {' '}
          <iframe
            title={`Map of ${countryName}`}
            src={map}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
