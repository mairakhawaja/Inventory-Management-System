// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHeiEbjzubXM28_O-OIFjMYkbeD1h_z_8",
  authDomain: "inventorymanagement-95783.firebaseapp.com",
  projectId: "inventorymanagement-95783",
  storageBucket: "inventorymanagement-95783.appspot.com",
  messagingSenderId: "884196681340",
  appId: "1:884196681340:web:1c46f1ea0555a798fdcbf9",
  measurementId: "G-KWLQ8HGB5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}

