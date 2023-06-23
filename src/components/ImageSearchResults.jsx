/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Pagination from './Pagination';

const ImageSearchResults = ({ results }) => {
  return (
    <div className='sm:pb-24 pb-40 mt-4'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-3 space-x-2'>
        {results.items.map((result) => (
          <div key={result.link} className='mb-8'>
            <div className='group  group-hover:shadow-xl transition-shadow'>
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className='h-52 w-full rounded-md object-contain transition-shadow group-hover:brightness-75'
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline truncate text-sm text-yellow-700 dark:text-yellow-300'>
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className='group-hover:underline text-gray-600 dark:text-gray-200'>
                  {result.displayLink}
                </p>
              </Link>
            </div>
            <div className='border-b pt-2 shadow-md border-gray-200 dark:border-gray-500'></div>
            {/* <hr className='bg-slate-800 mt-2 shadow-sm'/> */}
          </div>
        ))}
      </div>
      <div className='sm:ml-8 ml-0'>
        <Pagination />
      </div>
    </div>
  );
};
export default ImageSearchResults;
