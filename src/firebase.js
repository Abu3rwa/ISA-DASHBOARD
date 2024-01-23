// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgCr3Qg9HjcGh8A2bJQW0YShKwd0x-KUM",
  authDomain: "isa-school-app.firebaseapp.com",
  databaseURL:
    "https://isa-school-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "isa-school-app",
  storageBucket: "isa-school-app.appspot.com",
  messagingSenderId: "300513347780",
  appId: "1:300513347780:web:dd94ad33fdc8370e4f6191",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
