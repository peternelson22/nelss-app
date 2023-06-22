import Footer from '@/components/Footer';
import './globals.css';
import { ReduxProviders } from '@/redux/providers';
import ThemeProviders from '../theme/providers';

export const metadata = {
  title: 'NELSS - The new standard',
  description: 'A project to build Nelss',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        <ThemeProviders>
          <ReduxProviders>
            {children}
            <Footer />
          </ReduxProviders>
        </ThemeProviders>
      </body>
    </html>
  );
}
