'use client';

import { useEffect, useState } from 'react';

const CountryLookup = () => {
  const [country, setCountry] = useState('France');

  useEffect(() => {
    fetch(`https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCountry(data.location.country.name));
  }, []);
  return <div>{country}</div>;
};
export default CountryLookup;
