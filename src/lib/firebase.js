import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPpQ9orsiiyQq5u6XvdXJLUKtCuu3BEtI",
  authDomain: "postsandfeed.firebaseapp.com",
  projectId: "postsandfeed",
  storageBucket: "postsandfeed.firebasestorage.app",
  messagingSenderId: "615580663285",
  appId: "1:615580663285:web:298f8990ffa6ebc47474bc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);