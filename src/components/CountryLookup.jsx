'use client';

import { getCountry } from '@/redux/features/countrySlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const CountryLookup = () => {
  const [country, setCountry] = useState('France');
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCountry(data.location.country.name));
  }, []);

  dispatch(getCountry(country));
  return <div>{country}</div>;
};
export default CountryLookup;
