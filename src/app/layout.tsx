import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from 'next/link';
import { ReactNode } from 'react'; 


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface LayoutProps {
  children: ReactNode;
}




const RootLayout: React.FC<LayoutProps> = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/search">Search Albums</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
      <body>{children}</body>
    </main>
    </html>
  );
};

export default RootLayout;