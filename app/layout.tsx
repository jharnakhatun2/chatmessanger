import Navbar from '@/components/navbar';
import './globals.css';
import { IBM_Plex_Sans_Condensed, Inter } from 'next/font/google';
import Footer from '@/components/footer';

const ibm = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700'],
  variable: '--IBM',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--Inter',
});

export const metadata = {
  title: 'Konsulta',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${ibm.className} ${ibm.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
