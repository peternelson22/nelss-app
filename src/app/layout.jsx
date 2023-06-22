import Footer from '@/components/Footer';
import './globals.css';
import { Providers } from '@/redux/providers';

export const metadata = {
  title: 'Nelss',
  description: 'A demo project to build Nelss',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
