'use client'

import { useTheme } from 'next-themes';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const DarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => setTheme('light')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme('dark')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ))}
    </>
  );
};
export default DarkMode;
