// Firebase 설정
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase 구성
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 이메일 저장 함수
export const saveEmail = async (email) => {
  try {
    // 이메일 유효성 검사
    if (!email || !email.includes('@')) {
      throw new Error('유효한 이메일 주소를 입력해주세요.');
    }
    
    // Firestore에 이메일 저장
    const docRef = await addDoc(collection(db, 'subscribers'), {
      email,
      timestamp: new Date()
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('이메일 저장 오류:', error);
    return { success: false, error: error.message };
  }
};

export default app;
