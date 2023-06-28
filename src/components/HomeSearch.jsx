'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

const HomeSearch = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
  }

  const randomSearch = async () => {
    setLoading(true)
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await response.json()

    if (!response) return
    router.push(`/search/web?searchTerm=${data[0]}`)
    setLoading(false)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-center w-full mt-5 mx-auto max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 dark:border-gray-800 px-5 py-2 rounded-full focus:shadow-md hover:shadow-md transition-shadow'
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type='text'
          className='flex-grow focus: outline-none bg-white rounded py-1 dark:bg-[#131417] text-gray-900 dark:text-gray-50 tracking-wide'
        />
        <BsFillMicFill className='text-lg cursor-pointer text-gray-400' />
      </form>
      <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 mb-8'>
        <button onClick={handleSubmit} className='btn'>
          Search Nelss
        </button>
        <button
          disabled={loading}
          onClick={randomSearch}
          className='btn flex items-center justify-center disabled:opacity-80'
        >
          {loading ? (
            <Image
              src='spinner.svg'
              alt='loading...'
              width={30}
              height={30}
              className='h-8 text-center'
            />
          ) : (
            'I Am Feeling Fucky'
          )}
        </button>
      </div>
    </>
  );
}
export default HomeSearch
