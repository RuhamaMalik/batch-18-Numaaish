import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "./firebase.config.js";


let email = document.getElementById('email');
let password = document.getElementById('password');


const signUp = async (e) => {
  e.preventDefault();

  if (!email.value || !password.value) alert('All fields are required!')


  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    console.log(user);
    window.location.replace('/home.html')
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(error);
  }

}

document?.getElementById('signup')?.addEventListener('submit', signUp);


const signIn = async (e) => {
  e.preventDefault();

  if (!email.value || !password.value) alert('All fields are required!')

  try {
    let data = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log(data.user);
    window.location.replace('/home.html')
  } catch (error) {
    console.log(error);
  }
}

document.getElementById('signin')?.addEventListener('submit', signIn);


// //////////////////////////////// Google Auth

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
const google = async ()=>{
try {
 let result = await signInWithPopup(auth, provider);
   const user = result.user;
   console.log(user);
   
} catch (error) {
  console.log(error.message);
}
}

document.getElementById('google')?.addEventListener('click', google )