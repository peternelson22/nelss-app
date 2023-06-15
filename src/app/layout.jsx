import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Google clone',
  description: 'A demo project to build Google',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
