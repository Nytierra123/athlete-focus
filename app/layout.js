import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});


export const metadata = {
  title: 'Athlete Focus',
  description: 'Track your performance and recovery',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
       <body className={inter.className}>
       <div>{children}</div>
      </body>
    </html>
  );
}
