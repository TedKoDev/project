import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

//로그인 로그아웃 함수 만들기
export async function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  signOut(auth).catch(console.error);
}

//로그인 상태 확인 함수 만들기
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는경우( 로그인한 경우)
    // 2. 어드민 인진 확인하기

    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  //2.사용자가 어디민 권한이 있는지 확인
  //3. {...user, isAdmin: true/false} 전달

  return get(ref(database, `admins`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        // console.log("admins", admins);

        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
        // return true;
      } else {
        return user;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
