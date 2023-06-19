const refs = {     
    authorizationWindowInput: document.querySelectorAll(
      '.authorization-window-input'
    ),
    authorizationWindowSubmitButton: document.querySelector(
      '.authorization-window-submit-button'
    ),
    authorizationWindowForm: document.querySelector('.authorization-window-form'),
    authorization: document.querySelector("[data-authorization]"),
    signUpButton: document.querySelector('.sign-up'),
    signInButton: document.querySelector('.sign-in'),
    // signOutButton: document.querySelector('.sign-out'),
    passwordResetButton: document.querySelector('.password-reset'),
    deleteUserButton: document.querySelector('.delete-user'),
  };

let nameSignInBtn = "sign in";

  refs.signUpButton.disabled = false;
  refs.signInButton.disabled = false;
  // refs.signOutButton.disabled = true;
  refs.passwordResetButton.disabled = true;
  refs.deleteUserButton.disabled = true;

//   const { initializeApp } = require("firebase/app");  
import { Notify } from 'notiflix/build/notiflix-notify-aio'; // імпорт бібліотеки notiflix
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const firebaseConfig = {
  apiKey: 'AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms',
  authDomain: 'js-firebase-auth-cb2eb.firebaseapp.com',
  projectId: 'js-firebase-auth-cb2eb',
  storageBucket: 'js-firebase-auth-cb2eb.appspot.com',
  messagingSenderId: '233176764690',
  appId: '1:233176764690:web:5fcced0357c9421e88e3cb',
};
// console.log(firebaseConfig);

const app = initializeApp(firebaseConfig); // ініціалізація застосунку арр з аккаунту Google Firebase
// console.log(app);

// SignInMethod: {  
//   readonly EMAIL_PASSWORD: "password";  
// }

refs.signUpButton.addEventListener("click", ()=> {  
    refs.authorizationWindowSubmitButton.textContent = "sign up";
    refs.signUpButton.classList.add("current");
    refs.signInButton.classList.remove("current");
    // refs.signOutButton.classList.remove("current");
    refs.passwordResetButton.classList.remove("current");
    refs.deleteUserButton.classList.remove("current");
})

refs.signInButton.addEventListener("click", ()=> {  
    refs.authorizationWindowSubmitButton.textContent = refs.signInButton.textContent;
    refs.signUpButton.classList.remove("current");
    refs.signInButton.classList.add("current");
    // refs.signOutButton.classList.remove("current");
    refs.passwordResetButton.classList.remove("current");
    refs.deleteUserButton.classList.remove("current");
})

// refs.signOutButton.addEventListener("click", ()=> {
//     refs.authorizationWindowSubmitButton.textContent = "sign out";
//     refs.signUpButton.classList.remove("current");
//     refs.signInButton.classList.remove("current");
//     refs.signOutButton.classList.add("current");
//     refs.passwordResetButton.classList.remove("current");
//     refs.deleteUserButton.classList.remove("current");
// })

refs.passwordResetButton.addEventListener("click", ()=> {
    refs.authorizationWindowSubmitButton.textContent = "password reset";
    refs.signUpButton.classList.remove("current");
    refs.signInButton.classList.remove("current");
    // refs.signOutButton.classList.remove("current");
    refs.passwordResetButton.classList.add("current");
    refs.deleteUserButton.classList.remove("current");
})

refs.deleteUserButton.addEventListener("click", ()=> {
    refs.authorizationWindowSubmitButton.textContent = "delete user";
    refs.signUpButton.classList.remove("current");
    refs.signInButton.classList.remove("current");
    // refs.signOutButton.classList.remove("current");
    refs.passwordResetButton.classList.remove("current");
    refs.deleteUserButton.classList.add("current");
})

import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getAuth, authcreateUserWithEmailAndPassword } from 'firebase/auth';
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

  
// import { User } from 'firebase/auth';
const auth = getAuth(app);
// console.log(auth);
// const user = User.UserInfo;
// console.log(user);
// const auth = getAuth();

// console.log((refs.signInButton.textContent).trim());

refs.authorizationWindowForm.addEventListener("submit", (e)=>{  
  e.preventDefault();

  console.log("start submit");
  switch (refs.authorizationWindowSubmitButton.textContent) {    
    case "sign up":
      signUpWithEmailPassword();
      console.log("case sign up");      
      break;
  
    case ((refs.signInButton.textContent).trim()):
      toggleSignIn();
      // console.log("case " `${(refs.signInButton.textContent).trim()}`);
      console.log("case "+ (refs.signInButton.textContent).trim());
      break;
    
    // case "sign out":
    //     // handleSignUp();
    //     break;
    
    case "password reset":
        // інструкції;
        break;

    case "delete user":
      deletUser();
      console.log("case delete user");
        break;
  
    default:
      console.log("default");
      console.log(refs.authorizationWindowSubmitButton.textContent);
  }
})

// refs.authorizationWindowForm.addEventListener('submit', signUpWithEmailPassword);

function signUpWithEmailPassword() { 
  const email = `${refs.authorizationWindowForm.elements.email.value}`;
const password = `${refs.authorizationWindowForm.elements.password.value}`;
  // [START auth_signup_password]
  const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");

  const auth = getAuth();
  // console.log(auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      refs.authorization.classList.toggle("is-hidden");
      Notify.success(
          `User with email address ${email} successfully created!`
        );
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
  // [END auth_signup_password]
}

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log(uid);    
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     console.log("User is signed out"); 
//   }
// });


 /**
     * Handles the sign in button press.
     */


 function toggleSignIn() {
    if (auth.currentUser) {
      auth.signOut();      
      refs.authorization.classList.toggle("is-hidden");
      Notify.success(
        `User with email address ${email} successfully SIGNED OUT!`
      );
    } else {      
      const email = `${refs.authorizationWindowForm.elements.email.value}`;
      const password = `${refs.authorizationWindowForm.elements.password.value}`;      
      if (email.length < 4) {
        Notify.failure(
          `User email address is wrong! Please enter an email address.`
        );        
        return;
      }
      if (password.length < 4) {
        Notify.failure(
          `User password is wrong! Please enter a password.`
        );         
        return;
      };
      // Sign in with email and pass. 
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        refs.authorization.classList.toggle("is-hidden");
        Notify.success(
            `User with email address ${email} successfully SIGNED!`
          );          
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // document.getElementById('quickstart-sign-in').disabled = false;
      });
    }
    // document.getElementById('quickstart-sign-in').disabled = true;
  }


  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log(user);
  //   refs.authorization.classList.toggle("is-hidden");
  //   Notify.success(
  //       `User with email address ${email} successfully created!`
  //     );
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorCode);
  //   console.log(errorMessage);
  //   // ..
  // });
// [END auth_signup_password]










  /**
   * Handles the sign up button press.
   */
//   function handleSignUp() {
//     // e.preventDefault();
//     const email = `${refs.authorizationWindowForm.elements.email.value}`;
// const password = `${refs.authorizationWindowForm.elements.password.value}`;
//     if (email.length < 4) {
//       alert('Please enter an email address.');
//       return;
//     }
//     if (password.length < 4) {
//       alert('Please enter a password.');
//       return;
//     }
//     // Create user with email and pass.
//     // const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
  
//     // const auth = getAuth(app);
//     createUserWithEmailAndPassword(email, password).then((userCredential) => {
//       //   // Signed in 
//       user = userCredential.user;
//     console.log(user);
//     refs.authorization.classList.toggle("is-hidden");
//     Notify.success(
//         `User with email address ${email} successfully created!`
//       );}
//     ).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       if (errorCode == 'auth/weak-password') {
//         alert('The password is too weak.');
//       } else {
//         alert(errorMessage);
//       }
//       console.log(error);
//     });
//   }

  /**
   * Sends an email verification to the user.
   */
  // function sendEmailVerification() {
  //   firebase.auth().currentUser.sendEmailVerification().then(function() {
  //     // Email Verification sent!
  //     alert('Email Verification Sent!');
  //   });
  // }

  // function sendPasswordReset() {
  //   var email = document.getElementById('email').value;
  //   firebase.auth().sendPasswordResetEmail(email).then(function() {
  //     // Password Reset Email Sent!
  //     alert('Password Reset Email Sent!');
  //   }).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     if (errorCode == 'auth/invalid-email') {
  //       alert(errorMessage);
  //     } else if (errorCode == 'auth/user-not-found') {
  //       alert(errorMessage);
  //     }
  //     console.log(error);
  //   });
  // }

  /**
   * initApp handles setting up UI event listeners and registering Firebase auth listeners:
   *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
   *    out, and that is where we update the UI.
   */
  // function onAuthStateChanged(auth, NextOrObserver(User), ErrorFn, CompleteFn);

 

  function deletUser() {   
    if (auth.currentUser) {
      // console.log(auth.currentUser);
      // const user = currentUser;
      // user.deletUser();    
       
      auth.currentUser.delete; 
      auth.signOut();  
      refs.authorizationWindowForm.reset();     
      refs.authorization.classList.toggle("is-hidden");
      Notify.success(
        `User with email address ${email} successfully DELITED!`
      );
      
    } else { 
      Notify.failure(
          `User must be authorized before deletion.`
        );           
      };  
  }    
  
  function initApp() {
    // Listening for auth state changes.    
    auth.onAuthStateChanged(function(user) {      
      if (user) {
        // User is signed in.
        console.log("User is signed in.");        
        refs.signInButton.textContent = "sign out";
        refs.deleteUserButton.disabled = false;
        
      } else {
        // User is signed out.
        console.log("User is signed out.");        
        refs.signInButton.textContent = "sign in";
        refs.deleteUserButton.disabled = true;            
      }    
    });    
  } 
  
window.addEventListener("load", ()=>{
  initApp();
})

  