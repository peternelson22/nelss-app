'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

const SearchBox = () => {
  const router = useRouter()
  const params = useSearchParams()
  const searchTerm = params.get('searchTerm')
  const [term, setTerm] = useState(searchTerm || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!term.trim()) return
    router.push(`search/web?searchTerm=${term}`)
  }
  const clearSearch = () => {
    setTerm('')
    router.push(`search/web?searchTerm=${''}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex border border-gray-200 dark:border-gray-800 rounded-full shadow-lg sm:px-6 px-2 sm:py-2 py-1  ml-5 sm:ml-10 sm:mr-5 mr-2 flex-grow max-w-sm sm:max-w-3xl items-center'
    >
      <input
        type='text'
        className='w-24 sm:w-full focus:outline-none bg-white dark:bg-[#131417] py-1 rounded mx-3'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className='hidden sm:inline-flex text-2xl text-gray-500 dark:text-gray-800 cursor-pointer sm:mr-2'
        onClick={clearSearch}
      />
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-yellow-500 pl-4 border-l-2 border-gray-300  dark:border-gray-800 mr-3' />
      <AiOutlineSearch
        className='text-2xl hidden sm:inline-flex text-yellow-500 cursor-pointer'
        onClick={handleSubmit}
      />
    </form>
  );
}
export default SearchBox
