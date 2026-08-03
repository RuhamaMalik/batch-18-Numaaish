import {
  auth,
  createUserWithEmailAndPassword
} from "./firebase.config.js";


let email = document.getElementById('email');
let password = document.getElementById('password');


const signUp = async (e) => {
  e.preventDefault();

  if (!email.value || !password.value) alert('All fields are required!')


  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(error);
      
    });

}

document.getElementById('signup').addEventListener('submit', signUp)