// app/comingsoon/page.js
import ComingSoonSection from '@/app/components/ComingSoonSection';
import Link from 'next/link';

export const metadata = {
  title: 'TreeNote - 출시 예정 | 녹음을 통한 효율적인 학습',
  description: 'TreeNote 출시 소식을 알려드립니다. 특별 쿠폰 코드를 받아 14일 무료 이용권을 확보하세요.',
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen pt-20 pb-10 flex flex-col overflow-x-hidden w-full">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="text-green-600">TreeNote</span> 출시 예정
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            녹음을 통한 효율적인 학습의 혁명, TreeNote가 곧 여러분을 찾아갑니다.
          </p>
        </div>
      </div>
      
      <ComingSoonSection />
      
      <div className="mt-auto">
        <div className="container mx-auto px-6 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            메인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}