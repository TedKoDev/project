import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: 'AIzaSyCeLt5FlkW-UJNhdjFmZVPT6ljyCYMTZh0',
  authDomain: "hsquare-40253.firebaseapp.com",
  databaseURL: "https://hsquare-40253-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hsquare-40253",
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

export async function addNewProduct(product, image) {
  const id = uuidv4();
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    image,
    price: parseInt(product.price),
    options: product.option.split(","),
  });
}


export async function getProducts() {
  return get(ref(database, `products`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


export async function getCart(userId) {

  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {

      const items = snapshot.val() || {};

      console.log("getCart_items", items);
      return Object.values(items);
    });
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}