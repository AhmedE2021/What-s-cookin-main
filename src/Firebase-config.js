// Import the functions you need from the SDKs you need
import {getFirestore} from "@firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCDOCBRbbAGsqZuPO8pItl1-mCLIeX30M",
  authDomain: "recipes102030.firebaseapp.com",
  projectId: "recipes102030",
  storageBucket: "recipes102030.appspot.com",
  messagingSenderId: "951725661018",
  appId: "1:951725661018:web:9b25c18a486808741cf163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

