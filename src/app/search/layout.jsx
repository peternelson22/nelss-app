import SearchHeader from '@/components/SearchHeader'
import './../globals.css'

export const metadata = {
  title: 'Google clone',
  description: 'A demo project to build Google',
}

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}
