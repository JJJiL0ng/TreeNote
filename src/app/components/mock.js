// Mock.js
// 순수하게 시각적인 목업 컴포넌트 - 실제 기능이나 상호작용 없음
"use client"
import React from 'react';

const Mock = () => {
  return (
    <div className="font-sans">
      {/* CSS 변수 정의 */}
      <style jsx global>{`
        :root {
          --primary: #005DE9; /* 파란색 계열 - 메인 컬러 */
          --primary-dark: #004bb7; /* 진한 파란색 */
          --primary-light: #4d94ff; /* 밝은 파란색 */
          --secondary: #6366f1; /* 보조 색상 - indigo-500 */
          --background: #ffffff;
          --foreground: #111827; /* gray-900 */
          --muted: #6b7280; /* gray-500 */
          --accent: #f59e0b; /* amber-500 */
        }
      `}</style>

      {/* 전체 앱 레이아웃 */}
      <div className="flex h-screen bg-white">
        {/* 왼쪽 사이드바 */}
        <div className="w-64 border-r border-gray-200 flex flex-col bg-gray-50">
          {/* 로고 영역 */}
          <div className="h-14 flex items-center px-4 border-b border-gray-200">
            <span className="text-xl font-bold text-gray-800">Tree</span>
            <span className="text-xl font-bold" style={{ color: 'var(--primary)' }}>Note</span>
          </div>

          {/* 사이드바 메뉴 */}
          <div className="flex-1 overflow-y-auto">
            {/* 폴더/파일 네비게이션 */}
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">내 노트</span>
                <button className="text-gray-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <PlusIcon />
                </button>
              </div>

              {/* 활성화된 폴더 아이템 */}
              <div className="mt-1 mb-1 px-2 py-1.5 rounded-md bg-blue-50 flex items-center" style={{ color: 'var(--primary)' }}>
                <FolderIcon />
                <span className="ml-2 text-sm font-medium">컴퓨터공학</span>
              </div>

              {/* 비활성화된 폴더 아이템들 */}
              <div className="mt-1 mb-1 px-2 py-1.5 rounded-md flex items-center text-gray-700 hover:bg-gray-100">
                <FolderIcon />
                <span className="ml-2 text-sm font-medium">화학</span>
              </div>
              <div className="mt-1 mb-1 px-2 py-1.5 rounded-md flex items-center text-gray-700 hover:bg-gray-100">
                <FolderIcon />
                <span className="ml-2 text-sm font-medium">경영학</span>
              </div>
              <div className="mt-1 mb-1 px-2 py-1.5 rounded-md flex items-center text-gray-700 hover:bg-gray-100">
                <FolderIcon />
                <span className="ml-2 text-sm font-medium">프로젝트</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3 pb-1 px-3">
              <div className="mb-2 px-2 text-sm font-medium text-gray-700">즐겨찾기</div>
              <div className="mt-1 px-2 py-1.5 rounded-md flex items-center text-gray-700 hover:bg-gray-100">
                <StarIcon />
                <span className="ml-2 text-sm">데이터베이스 개론</span>
              </div>
              <div className="mt-1 px-2 py-1.5 rounded-md flex items-center text-gray-700 hover:bg-gray-100">
                <StarIcon />
                <span className="ml-2 text-sm">알고리즘 분석</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-3 pb-1 px-3">
              <div className="mb-2 px-2 text-sm font-medium text-gray-700">최근 녹음</div>
              <div className="mt-1 px-2 py-1.5 rounded-md flex justify-between items-center text-gray-700 hover:bg-gray-100">
                <div className="flex items-center">
                  <MicIcon />
                  <span className="ml-2 text-sm">네트워크 강의</span>
                </div>
                <span className="text-xs text-gray-400">28:33</span>
              </div>
              <div className="mt-1 px-2 py-1.5 rounded-md flex justify-between items-center text-gray-700 hover:bg-gray-100">
                <div className="flex items-center">
                  <MicIcon />
                  <span className="ml-2 text-sm">운영체제 특강</span>
                </div>
                <span className="text-xs text-gray-400">45:22</span>
              </div>
            </div>
          </div>

          {/* 하단 사용자 영역 */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <UserIcon />
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium">김준형</div>
                <div className="text-xs text-gray-500">Free 플랜</div>
              </div>
            </div>
          </div>
        </div>

        {/* 중앙 메인 컨텐츠 영역 */}
        <div className="flex-1 flex flex-col">
          {/* 상단 헤더 */}
          <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6">
            <div className="flex items-center">
              <div className="text-lg font-semibold">데이터베이스 시스템 개론</div>
              <div className="ml-3 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">컴퓨터공학</div>
            </div>
            <div className="flex items-center">
              <button className="mr-3 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                <SearchIcon />
              </button>
              <button className="mr-3 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                <ShareIcon />
              </button>
              <button className="mr-3 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                <SettingsIcon />
              </button>
            </div>
          </div>

          {/* 오디오 플레이어 바 */}
          <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor: 'var(--primary)' }}>
              <div className="text-white">
                <PlayIcon />
              </div>
            </button>
            <div className="mx-4 flex-1">
              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 rounded-full w-1/3" style={{ backgroundColor: 'var(--primary)' }}></div>
              </div>
            </div>
            <div className="text-xs text-gray-500">32:45 / 47:12</div>

            <div className="ml-4 border-l border-gray-300 pl-4">
              <button className="px-3 py-1 rounded-md text-white flex items-center" style={{ backgroundColor: 'var(--primary)' }}>
                <MicIcon />
                <span className="ml-1 text-sm">녹음</span>
              </button>
            </div>
          </div>

          {/* 트리 필기 구조 */}
          <div className="flex-1 p-6 overflow-auto">
            {/* 메인 트리 노드 1 */}
            <div className="mb-6 pb-2">
              <div className="flex items-center mb-2">
                <div className="flex-1 flex items-center">
                  <div className="w-1 h-6 mr-2 rounded" style={{ backgroundColor: 'var(--primary)' }}></div>
                  <div contentEditable="false" className="text-lg font-bold">1. 데이터베이스 기본 개념</div>
                </div>
                <div className="flex items-center text-gray-400">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <PlusIcon />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100">
                    <MoreIcon />
                  </button>
                </div>
              </div>
              <div className="pl-6 pr-4 text-gray-600">
                데이터베이스는 체계적으로 구조화된 데이터의 모음으로, 데이터의 중복을 최소화하고 무결성을 보장하며 다수의 사용자가 동시에 접근 가능하도록 설계되었다.
              </div>
              
              {/* 서브 노드 레벨 1 */}
              <div className="ml-8 mt-4">
                <div className="flex items-center mb-2">
                  <div className="flex-1 flex items-center">
                    <div className="w-1 h-5 mr-2 rounded bg-blue-400"></div>
                    <div contentEditable="false" className="text-md font-bold">1.1 DBMS(Database Management System)</div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <button className="p-1 rounded hover:bg-gray-100">
                      <PlusIcon />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100">
                      <MoreIcon />
                    </button>
                  </div>
                </div>
                <div className="pl-6 pr-4 text-gray-600">
                  DBMS는 사용자와 데이터베이스 사이에서 사용자의 요구에 따라 정보를 생성해 주고 데이터베이스를 관리해 주는 소프트웨어 시스템이다.
                </div>
                
                {/* 서브 노드 레벨 2 */}
                <div className="ml-8 mt-3">
                  <div className="flex items-center mb-2">
                    <div className="flex-1 flex items-center">
                      <div className="w-1 h-5 mr-2 rounded bg-blue-300"></div>
                      <div contentEditable="false" className="font-bold">1.1.1 DBMS의 주요 기능</div>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <button className="p-1 rounded hover:bg-gray-100">
                        <PlusIcon />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100">
                        <MoreIcon />
                      </button>
                    </div>
                  </div>
                  <div className="pl-6 pr-4 text-gray-600">
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>데이터 정의(DDL): 데이터베이스 구조 정의 및 수정</li>
                      <li>데이터 조작(DML): 데이터 검색, 삽입, 삭제, 수정</li>
                      <li>데이터 제어(DCL): 데이터 무결성, 보안, 권한 관리</li>
                      <li>트랜잭션 관리: 동시성 제어 및 복구 기능</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 서브 노드 레벨 1 - 두번째 */}
              <div className="ml-8 mt-4">
                <div className="flex items-center mb-2">
                  <div className="flex-1 flex items-center">
                    <div className="w-1 h-5 mr-2 rounded bg-blue-400"></div>
                    <div contentEditable="false" className="text-md font-bold">1.2 데이터베이스 모델의 유형</div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <button className="p-1 rounded hover:bg-gray-100">
                      <PlusIcon />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100">
                      <MoreIcon />
                    </button>
                  </div>
                </div>
                <div className="pl-6 pr-4 text-gray-600">
                  데이터베이스 모델은 데이터의 구조와 관계를 정의하는 방식으로, 계층형, 네트워크형, 관계형, 객체지향형 등이 있다.
                </div>
              </div>
            </div>

            {/* 메인 트리 노드 2 */}
            <div className="mb-6 pb-2">
              <div className="flex items-center mb-2">
                <div className="flex-1 flex items-center">
                  <div className="w-1 h-6 mr-2 rounded" style={{ backgroundColor: 'var(--primary)' }}></div>
                  <div contentEditable="false" className="text-lg font-bold">2. 관계형 데이터베이스(RDBMS)</div>
                </div>
                <div className="flex items-center text-gray-400">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <PlusIcon />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100">
                    <MoreIcon />
                  </button>
                </div>
              </div>
              <div className="pl-6 pr-4 text-gray-600">
                관계형 데이터베이스는 1970년 E.F. Codd에 의해 제안된 모델로, 데이터를 테이블(표) 형태로 표현하며 SQL을 통해 데이터를 관리한다.
              </div>
              
              {/* 서브 노드 레벨 1 */}
              <div className="ml-8 mt-4">
                <div className="flex items-center mb-2">
                  <div className="flex-1 flex items-center">
                    <div className="w-1 h-5 mr-2 rounded bg-blue-400"></div>
                    <div contentEditable="false" className="text-md font-bold">2.1 관계형 데이터베이스의 특징</div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <button className="p-1 rounded hover:bg-gray-100">
                      <PlusIcon />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100">
                      <MoreIcon />
                    </button>
                  </div>
                </div>
                <div className="pl-6 pr-4 text-gray-600">
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    <li>데이터를 행(레코드)과 열(필드)로 이루어진 테이블에 저장</li>
                    <li>기본키(Primary Key)를 통해 각 행을 고유하게 식별</li>
                    <li>외래키(Foreign Key)를 통해 테이블 간 관계 정의</li>
                    <li>정규화를 통한 데이터 중복 최소화</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 AI 패널 */}
        <div className="w-72 border-l border-gray-200 flex flex-col">
          <div className="h-14 border-b border-gray-200 flex items-center px-4">
            <span className="font-semibold">AI 도우미</span>
            <div className="ml-auto">
              <button className="px-3 py-1 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: 'var(--primary)' }}>
                AI 요약 업데이트
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-auto">
            <div className="mb-6">
              <div className="text-sm font-medium mb-2">요약</div>
              <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                이 노트는 데이터베이스 시스템의 기본 개념과 관계형 데이터베이스의 특징을 설명합니다. DBMS의 주요 기능(DDL, DML, DCL, 트랜잭션 관리)과 다양한 데이터베이스 모델(계층형, 네트워크형, 관계형, 객체지향형)에 대해 다룹니다.
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-sm font-medium mb-2">핵심 개념</div>
              <div className="space-y-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <div className="font-medium text-sm">DBMS</div>
                  <div className="text-xs text-gray-600 mt-1">사용자와 데이터베이스 사이를 연결하는 소프트웨어 시스템</div>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <div className="font-medium text-sm">관계형 데이터베이스</div>
                  <div className="text-xs text-gray-600 mt-1">데이터를 테이블 형태로 표현하는 데이터베이스 모델</div>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <div className="font-medium text-sm">SQL</div>
                  <div className="text-xs text-gray-600 mt-1">관계형 데이터베이스 관리를 위한 표준 질의 언어</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-sm font-medium mb-2">연습 문제</div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="mb-3">
                  <div className="font-medium text-sm mb-1">Q1: 다음 중 DDL에 해당하는 명령어는?</div>
                  <div className="ml-2 mt-2 space-y-1 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 mr-2"></div>
                      <span>SELECT</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 bg-blue-500 mr-2"></div>
                      <span className="font-medium">CREATE</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 mr-2"></div>
                      <span>INSERT</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 mr-2"></div>
                      <span>UPDATE</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-sm mb-1">Q2: 관계형 데이터베이스의 특징이 아닌 것은?</div>
                  <div className="ml-2 mt-2 space-y-1 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 bg-blue-500 mr-2"></div>
                      <span className="font-medium">계층적 구조</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 mr-2"></div>
                      <span>테이블 형태의 데이터 저장</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 mr-2"></div>
                      <span>기본키를 통한 식별</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border border-gray-400 mr-2"></div>
                      <span>SQL 사용</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 아이콘 컴포넌트들 - 실제 앱과 유사한 모양으로 간단하게 구현
const FolderIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12H5" />
  </svg>
);

const MoreIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
    </svg>
);

export default Mock;