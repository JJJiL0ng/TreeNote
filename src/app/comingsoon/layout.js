// app/comingsoon/layout.js
import '../globals.css';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/react"
export default function ComingSoonLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" 
        />
      </head>
      <body>
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
      </body>
    </html>
  );
}