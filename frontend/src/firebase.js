import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "infytech1337.firebaseapp.com",
  projectId: "infytech1337",
  storageBucket: "infytech1337.appspot.com",
  messagingSenderId: "307116764783",
  appId: "1:307116764783:web:e868592e1d99da4161e79a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
