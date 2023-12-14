
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAPoqZ58wqnJIu8teTa7uuonvqFkbXTK6k",
  authDomain: "izde-e1088.firebaseapp.com",
  projectId: "izde-e1088",
  storageBucket: "izde-e1088.appspot.com",
  messagingSenderId: "427708153435",
  appId: "1:427708153435:web:dfb2bf4802ae63615e097e",
  measurementId: "G-NQ09TN4PQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app)