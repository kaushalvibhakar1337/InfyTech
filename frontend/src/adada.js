import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "infytech-b1831.firebaseapp.com",
  projectId: "infytech-b1831",
  storageBucket: "infytech-b1831.appspot.com",
  messagingSenderId: "564496771333",
  appId: "1:564496771333:web:e050a3d598d4ccf1b0ef6c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
