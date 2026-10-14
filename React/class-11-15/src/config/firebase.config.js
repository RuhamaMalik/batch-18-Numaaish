import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: "batch-18-bb77a.firebaseapp.com",
  databaseURL: import.meta.env.VITE_DB_URL  ,
  projectId: "batch-18-bb77a",
  storageBucket: "batch-18-bb77a.firebasestorage.app",
  messagingSenderId: "604443747562",
  appId: "1:604443747562:web:25513e6e471926a17e6393"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,createUserWithEmailAndPassword, db, doc, setDoc}