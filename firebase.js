import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVlCZTI3njDTGLy3SkljED8dwu5_9mIV0",
  authDomain: "burbstodo.firebaseapp.com",
  databaseURL: "https://burbstodo-default-rtdb.firebaseio.com",
  projectId: "burbstodo",
  storageBucket: "burbstodo.appspot.com",
  messagingSenderId: "439783622695",
  appId: "1:439783622695:web:fe5a22d78f5362e46e2602",
  measurementId: "G-BD6BLSNB99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;