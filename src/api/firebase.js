import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();


//로그인 로그아웃 함수 만들기
export async function login() {
    signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
    signOut(auth).catch(console.error);
}

//로그인 상태 확인 함수 만들기
export function onUserStateChange(callback) {
    onAuthStateChanged(auth, (user) => {
        callback(user);
    });
}
