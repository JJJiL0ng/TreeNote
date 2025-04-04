// app/comingsoon/layout.js
import '../globals.css';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
};

export default function ComingSoonLayout({ children }) {
  return (
    <div className={`${notoSansKr.className} overflow-x-hidden w-full`}>
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="font-bold text-xl text-green-600">TreeNote</span>
            </Link>
          </div>
          <Link 
            href="/" 
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            홈페이지
          </Link>
        </div>
      </header>
      
      <main>{children}</main>
      
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TreeNote. All rights reserved.
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}