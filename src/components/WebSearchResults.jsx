import Link from 'next/link';
import Parser from 'html-react-parser';
import Pagination from './Pagination';

const WebSearchResults = ({ results }) => {
  return (
    <div className='w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 dark:text-gray-200 text-sm mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className='mb-6 max-w-2xl' key={result.link}>
          <div className='group flex flex-col'>
            <Link className='text-sm truncate' href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className='group-hover:underline decoration-yellow-500 text-xl truncate font-medium text-yellow-700 dark:text-yellow-300'
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className='text-gray-600 dark:text-gray-200  '>
            {Parser(result.htmlSnippet)}
          </p>
          <p className='border-b  border-gray-200 dark:border-gray-500 shadow-sm pt-3'></p>
          {/* <hr className='mt-2 text-gray-600 bg-gray-200 dark:bg-gray-800 dark:hidden shadow-sm'/> */}
        </div>
      ))}
      <Pagination />
    </div>
  );
};
export default WebSearchResults;
