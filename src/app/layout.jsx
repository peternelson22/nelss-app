import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Google clone',
  description: 'A demo project to build Google',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
