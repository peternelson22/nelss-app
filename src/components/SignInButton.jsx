'use client';

import { selectCountry } from '@/redux/features/countrySlice';
import { useSelector } from 'react-redux';

const SignInButton = () => {
  const country = useSelector(selectCountry);
  return (
    <button
      onClick={() =>
        alert(`Hey... you from ${country}, I'm coming soooon (nelson)`)
      }
      className='bg-yellow-400 text-gray-100 ml-2 sm:px-6 px-2 sm:py-2 py-1 font-medium rounded-md hover:brightness-105 shadow-md dark:shadow-amber-400 transition-all whitespace-nowrap'
    >
      Sign in
    </button>
  );
};
export default SignInButton;
