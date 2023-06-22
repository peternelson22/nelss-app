import Image from 'next/image'
import Link from 'next/link'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'
import SignInButton from './SignInButton'

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center justify-between'>
        <Link href={'/'}>
          <Image
            src={
              'https://www.nelss.lv/wp-content/uploads/2018/01/nelss-logo-vienads.jpg'
            }
            width={60}
            height={20}
            alt='Google Logo'
          />
        </Link>
        <div className='flex-1'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <SignInButton />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
export default SearchHeader
