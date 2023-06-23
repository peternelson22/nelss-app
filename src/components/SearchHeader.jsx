import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';
import SignInButton from './SignInButton';
import DarkMode from '@/theme/darkmode';

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white dark:bg-gray-700'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href={'/'}>
          <Image
            src={
              'https://www.nelss.lv/wp-content/uploads/2018/01/nelss-logo-vienads.jpg'
            }
            width={60}
            height={20}
            alt='Google Logo'
            className='rounded-md dark:motion-safe:animate-bounce dark:opacity-30'
          />
        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-1 pl-1 mr-2'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <DarkMode />
        <SignInButton />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};
export default SearchHeader;
