'use client';

import { getCountry, selectCountry } from '@/redux/features/countrySlice';
import { useEffect } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const CountryLookup = () => {
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);

  const fetchCountry = async () => {
    const res = await fetch(
      `https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();

    const country = dispatch(getCountry(data.location.country.name));
    console.log(country);
    return country.payload;
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div className='flex items-center'>
      <span className='text-amber-500/60'>
        <MdLocationPin />
      </span>{' '}
      {country}
    </div>
  );
};
export default CountryLookup;
