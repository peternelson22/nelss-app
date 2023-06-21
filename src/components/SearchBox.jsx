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
      className='flex border border-gray-200 rounded-full shadow-lg sm:px-6 px-2 sm:py-3 py-1.5  ml-5 sm:ml-10 sm:mr-5 mr-2 flex-grow max-w-sm sm:max-w-3xl items-center'
    >
      <input
        type='text'
        className='w-24 sm:w-full focus:outline-none'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className='hidden sm:inline-flex text-2xl text-gray-500 cursor-pointer sm:mr-2'
        onClick={clearSearch}
      />
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3' />
      <AiOutlineSearch
        className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'
        onClick={handleSubmit}
      />
    </form>
  )
}
export default SearchBox
