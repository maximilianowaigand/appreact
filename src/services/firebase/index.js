import { initializeApp } from "firebase/app";
import {getFirestore}    from 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyDCdKiDL-MPthjymH5DCNo81kTrsQfIMk0",
  authDomain: "e-commerceapi-ac023.firebaseapp.com",
  projectId: "e-commerceapi-ac023",
  storageBucket: "e-commerceapi-ac023.firebasestorage.app",
  messagingSenderId: "497393226638",
  appId: "1:497393226638:web:7f9d95fe25de27183bcadf"
};

const app = initializeApp(firebaseConfig);

export const baseDate = getFirestore(app)