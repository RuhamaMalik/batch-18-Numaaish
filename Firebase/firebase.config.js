import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAr9DjTe58xx_7EirNBdpNJjOWi5O1-zp8",
  authDomain: "batch-18-bb77a.firebaseapp.com",
  projectId: "batch-18-bb77a",
  storageBucket: "batch-18-bb77a.firebasestorage.app",
  messagingSenderId: "604443747562",
  appId: "1:604443747562:web:25513e6e471926a17e6393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export {
  auth,
  createUserWithEmailAndPassword,
}
