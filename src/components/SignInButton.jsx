'use client';

import { selectCountry } from '@/redux/features/countrySlice';
import { useSelector } from 'react-redux';

const SignInButton = () => {
  const country = useSelector(selectCountry);
  return (
    <button
      onClick={() =>
        alert(`Hey... you from ${country}, I'm cummmming soooon (nelson)`)
      }
      className='bg-yellow-300 text-white ml-2 sm:px-6 px-2 sm:py-2 py-1 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all whitespace-nowrap'
    >
      Sign in
    </button>
  );
};
export default SignInButton;
