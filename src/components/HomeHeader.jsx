import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';
import SignInButton from './SignInButton';
import DarkMode from '@/theme/darkmode';

const HomeHeader = () => {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className='flex space-x-4 items-center'>
        <Link
          href='https://github.com/peternelson22'
          className='hover:underline dark:text-red'
        >
          Nmail
        </Link>
        <Link
          href='https://github.com/peternelson22'
          className='hover:underline'
        >
          Images
        </Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2' />
        <DarkMode />
        <SignInButton />
      </div>
    </header>
  );
};
export default HomeHeader;
