import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPpQ9orsiiyQq5u6XvdXJLUKtCuu3BEtI",
  authDomain: "postsandfeed.firebaseapp.com",
  projectId: "postsandfeed",
  storageBucket: "postsandfeed.firebasestorage.app",
  messagingSenderId: "615580663285",
  appId: "1:615580663285:web:298f8990ffa6ebc47474bc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);