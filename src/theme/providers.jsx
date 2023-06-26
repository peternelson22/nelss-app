'use client';

import { ThemeProvider } from 'next-themes';

const ThemeProviders = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-[#131417] dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none'>
        {children}
      </div>
    </ThemeProvider>
  );
};
export default ThemeProviders;
