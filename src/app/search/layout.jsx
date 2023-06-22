import SearchHeader from '@/components/SearchHeader'
import './../globals.css'

export const metadata = {
  title: 'Nelss',
  description: 'A demo project to build Nelss',
}

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}
