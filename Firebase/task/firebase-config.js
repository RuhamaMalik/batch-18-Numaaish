import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, 
  query, where, orderBy, serverTimestamp, arrayUnion, arrayRemove 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAr9DjTe58xx_7EirNBdpNJjOWi5O1-zp8",
  authDomain: "batch-18-bb77a.firebaseapp.com",
  databaseURL: "https://batch-18-bb77a-default-rtdb.firebaseio.com",
  projectId: "batch-18-bb77a",
  storageBucket: "batch-18-bb77a.firebasestorage.app",
  messagingSenderId: "604443747562",
  appId: "1:604443747562:web:25513e6e471926a17e6393"
};

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Cloudinary Configuration
export const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/docmtwzxm/image/upload";
export const CLOUDINARY_UPLOAD_PRESET = "blog_preset";

export { 
  signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signOut, sendPasswordResetEmail, onAuthStateChanged, collection, addDoc, 
  getDocs, getDoc, doc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp, 
  arrayUnion, arrayRemove 
};