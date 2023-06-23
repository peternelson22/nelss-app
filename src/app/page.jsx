import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center sm:mt-18 mt-10 mb-4 '>
        <Image
          src={
            'https://www.nelss.lv/wp-content/uploads/2018/01/nelss-logo-vienads.jpg'
          }
          width='200'
          height='40'
          alt='Nelss Logo'
          className='motion-safe:animate-pulse dark:opacity-5 rounded-full bg-gradient-to-r from-amber-200 to-amber-600'
        />
        <HomeSearch />
      </div>
    </>
  );
}
