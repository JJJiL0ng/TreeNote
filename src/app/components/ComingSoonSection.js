'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '../animations';

export default function ComingSoonSection() {
  // 애니메이션 적용
  useIntersectionObserver();
  
  // 쿠폰 복사 상태 관리
  const [copied, setCopied] = useState(false);
  
  // 쿠폰 코드
  const couponCode = "thankyou2025";
  
  // 쿠폰 코드 복사 함수
  const copyCouponCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    
    // 3초 후에 복사 상태 리셋
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-100 fade-in">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
              Coming Soon
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              TreeNote 출시가 임박했습니다!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              TreeNote에 관심을 가져주셔서 진심으로 감사합니다. 여러분의 학습을 혁신적으로 변화시킬 TreeNote가 곧 여러분을 찾아갑니다.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-green-100 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center text-green-600 mb-2 text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-4 4v7H6m6 0v3m0-3h2m-6 0h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">특별 혜택: 14일 무료 이용권</h3>
              <p className="text-gray-600 text-center mb-4">
                앱이 정식 런칭되면 아래의 쿠폰 번호를 입력하시고 14일 무료 프리미엄 이용권을 받아가세요.
              </p>
              
              <div className="relative w-full max-w-md">
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 font-mono text-center text-lg mb-2 flex items-center justify-between">
                  <span className="mx-auto font-semibold tracking-wider text-gray-800">{couponCode}</span>
                  <button 
                    onClick={copyCouponCode} 
                    className="absolute right-3 text-gray-500 hover:text-green-600 transition-colors"
                    aria-label="쿠폰 코드 복사"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                      <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                    </svg>
                  </button>
                </div>
                {copied && (
                  <div className="text-green-600 text-sm text-center">
                    쿠폰 코드가 클립보드에 복사되었습니다!
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold text-gray-800 mb-4">출시 소식을 가장 먼저 받아보세요</h4>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="이메일 주소 입력" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button className="bg-green-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
                알림 신청하기
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              개인정보는 안전하게 보호되며, 출시 소식만 발송해 드립니다.
            </p>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
            <div className="text-gray-600 mb-4 sm:mb-0">
              <p>출시 예상 시기: 2025년 상반기</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}