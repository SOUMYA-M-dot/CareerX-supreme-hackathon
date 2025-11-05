// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBoj-wsYBz9Uu0kJAVaGJTw9RDaMVLhJOQ",
  authDomain: "fir-4b154.firebaseapp.com",
  projectId: "fir-4b154",
  storageBucket: "fir-4b154.firebasestorage.app",
  messagingSenderId: "862637235373",
  appId: "1:862637235373:web:994f0693c127195909ba24",
  databaseURL: "https://fir-4b154-default-rtdb.firebaseio.com" // ✅ corrected URL
};

const app = initializeApp(firebaseConfig);

// ✅ export Firebase Auth
export const auth = getAuth(app);
export const db = getFirestore(app);
