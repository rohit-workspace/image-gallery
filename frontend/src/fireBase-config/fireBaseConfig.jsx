// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJidX4SpBd0m7sJDQymnAV--r1TSR2tPA",
  authDomain: "image-gallery-29d05.firebaseapp.com",
  projectId: "image-gallery-29d05",
  storageBucket: "image-gallery-29d05.appspot.com",
  messagingSenderId: "1010561625362",
  appId: "1:1010561625362:web:01dbf4f13cd2a71e8257cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
