import Link from 'next/link';
import Parser from 'html-react-parser';
import Pagination from './Pagination';

const WebSearchResults = ({ results }) => {
  return (
    <div className='w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mb-5 mt-3'>
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
              className='group-hover:underline decoration-yellow-800 text-xl truncate font-medium text-yellow-700'
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
          <hr className='mt-2 bg-gray-50 shadow-sm'/>
        </div>
      
      ))}
      <Pagination />
    </div>
  );
};
export default WebSearchResults;
