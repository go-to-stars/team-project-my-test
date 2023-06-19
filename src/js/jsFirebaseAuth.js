const refs = {
  buttonSwitch: document.querySelector('.btn-switch'),
  body: document.querySelector('body'),
  header: document.querySelector('header'),
  knobsBig: document.querySelector('.knobs-big'),
  knobsMedium: document.querySelector('.knobs-medium'),
  knobsSmall: document.querySelector('.knobs-small'),
  authorizationWindowInput: document.querySelectorAll(
    '.authorization-window-input'
  ),
  authorizationWindow: document.querySelector('.authorization-window'),
  authorizationWindowCloseButtonIcon: document.querySelector(
    '.authorization-window-close-button-icon'
  ),
  authorizationWindowIcon: document.querySelectorAll(
    '.authorization-window-icon'
  ),
  authorizationWindowSubmitButton: document.querySelector(
    '.authorization-window-submit-button'
  ),

  authorizationWindowForm: document.querySelector('.authorization-window-form'),
};

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
console.log(initializeApp);

import { getAuth } from 'firebase/auth';
console.log(getAuth);
import { getFirebaseConfig } from './firebase-config.js';
console.log(getFirebaseConfig);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms',
//   authDomain: 'js-firebase-auth-cb2eb.firebaseapp.com',
//   projectId: 'js-firebase-auth-cb2eb',
//   storageBucket: 'js-firebase-auth-cb2eb.appspot.com',
//   messagingSenderId: '233176764690',
//   appId: '1:233176764690:web:5fcced0357c9421e88e3cb',
// };

// Initialize Firebase
const app = initializeApp(getFirebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });

console.log(
  createUserWithEmailAndPassword(
    auth,
    `${refs.authorizationWindowForm.elements.email.value}`,
    `${refs.authorizationWindowForm.elements.password.value}`
  )
);

import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { refs } from './refs';

firebase.initializeApp(initializeApp);

const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],

  signInFlow: 'popup',
};

ui.start('#firebaseui-auth-container', uiConfig);

function dropdownAuth(element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active');

    if (element.classList.contains('active')) {
      refs.signInBtn.addEventListener('click', function (e) {
        closeTargetElm(e.target, element);
      });
    } else {
      refs.signInBtn.removeEventListener('click', function (e) {
        closeTargetElm(e.target, element);
      });
    }
  });
}

function closeTargetElm(target, element) {
  if (target !== element) {
    element.classList.remove('active');
  }
}

dropdownAuth(refs.signInBtn);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    refs.signInBtn.innerText = 'Sign out';
    refs.signInBtn.addEventListener('click', signOutUser);
    refs.authContainer.style.display = 'none';
    //newClient();
  }
});

function signOutUser() {
  console.log('sign out');
  firebase
    .auth()
    .signOut()
    .then(() => {
      refs.signInBtn.style.display = 'flex';
      refs.authContainer.style.display = 'block';
      refs.signInBtn.addEventListener('click', dropdownAuth);
      location.reload();
    })
    .catch(error => toastr.error(error.message));
}

// const docRef = firebase.database().ref('clients').push(user);
// console.log(docRef);

// async function  newClient(user) {
//            try {
//                const addClient = await firebase.database().ref('clients').push(newClinet)
//                console.log(addClient)
//            } catch (error) {
//                console.log(error.message)
//                throw error
//            }
//        }
