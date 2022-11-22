// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEe7tvZD-Q25AP0BVWq2T0qjBIGr2eWsM",
  authDomain: "ecomerce-parente34800.firebaseapp.com",
  projectId: "ecomerce-parente34800",
  storageBucket: "ecomerce-parente34800.appspot.com",
  messagingSenderId: "444137561340",
  appId: "1:444137561340:web:284525764884a03d388b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app