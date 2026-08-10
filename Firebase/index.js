import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,

  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setDoc,
  doc,
  db,

} from "./firebase.config.js";


let email = document.getElementById('email');
let password = document.getElementById('password');


const signUp = async (e) => {
  e.preventDefault();

  let name = document.getElementById('name');
  let contact = document.getElementById('contact');
  let country = document.getElementById('country');

  if (!email.value || !password.value) alert('All fields are required!')

  try {
    ////// register user
    let userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    

    ////// save user in db
    await setDoc(doc(db, "users", user?.uid), {
      name:name?.value,
      contact:contact?.value,
      country:country?.value,
      role:'user',
      isActive:true
    });

    ////// send email verificatio link
    // if (!user?.emailVerified) {
    //   signOut(auth);
    //   await sendEmailVerification(auth.currentUser);
    //   alert('Please verify your Email!');
    // }

    // window.location.replace('/');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(error);
  }

}

document?.getElementById('signup')?.addEventListener('submit', signUp);



// ///////////////////  SignIn   ////////////////////// 



const signIn = async (e) => {
  e.preventDefault();

  if (!email.value || !password.value) alert('All fields are required!')

  try {
    let data = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log(data.user);

    if (!data.user.emailVerified) {
      signOut(auth);
      await sendEmailVerification(auth.currentUser);
      alert('Please verify your Email!');
    }

    window.location.replace('/');

  } catch (error) {
    console.log(error);
  }
}

document.getElementById('signin')?.addEventListener('submit', signIn);


////////////////////////////////// Google Auth

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

const google = async () => {
  try {
    let result = await signInWithPopup(auth, provider);
    const user = result.user;
    window.location.replace('/');
  } catch (error) {
    console.log(error.message);
  }
}

document.getElementById('google')?.addEventListener('click', google)


// //////////////////////////// Signout

const _singOut = () => {
  signOut(auth)
}

document.getElementById('logout')?.addEventListener('click', _singOut);


// ////////////////////////////////


const forgetPswd = async () => {
  try {
    await sendPasswordResetEmail(auth, email?.value);
    alert('Email sent!')
  } catch (error) {
    console.log(error.message);
  }
}

document.getElementById('fg-pswd')?.addEventListener('click', forgetPswd)






