import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDukMAbk7Gx37_V8A8yZIWkX7SXCPRnHIc",
  authDomain: "pdf-chat-bot-ab98a.firebaseapp.com",
  projectId: "pdf-chat-bot-ab98a",
  storageBucket: "pdf-chat-bot-ab98a.appspot.com",
  messagingSenderId: "1071690622771",
  appId: "1:1071690622771:web:fb5b4ac30abd98fffcc046",
  measurementId: "G-KQ95QV55Z9"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);


export { db, storage, analytics };