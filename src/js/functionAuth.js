const refs = {
  authorizationWindowInput: document.querySelectorAll(
    '.authorization-window-input'
  ),
  authorizationWindowSubmitButton: document.querySelector(
    '.authorization-window-submit-button'
  ),
  authorizationWindowForm: document.querySelector('.authorization-window-form'),
  authorization: document.querySelector('[data-authorization]'),
  signUpButton: document.querySelector('.sign-up'),
  signInButton: document.querySelector('.sign-in'),
  btnLogin: document.querySelector('.btn-login'),
  btnSigned: document.querySelector('.btn-signed'),
  btnLoginTextSigned: document.querySelector('.btn-login-text-signed'),
  btnLogout: document.querySelector('.btn-logout'),
}; // масив посилань 

import { Notify } from 'notiflix/build/notiflix-notify-aio'; // імпорт бібліотеки notiflix
import { initializeApp } from 'firebase/app'; // імпорт функції "initializeApp"
import { getAuth } from 'firebase/auth'; // імпорт функції "getAuth"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // імпорт функції "createUserWithEmailAndPassword"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // імпорт функції "signInWithEmailAndPassword"
import { getAuth, signUpWithEmailPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms',
  authDomain: 'js-firebase-auth-cb2eb.firebaseapp.com',
  projectId: 'js-firebase-auth-cb2eb',
  storageBucket: 'js-firebase-auth-cb2eb.appspot.com',
  messagingSenderId: '233176764690',
  appId: '1:233176764690:web:5fcced0357c9421e88e3cb',
}; // параметри конфігурації firebase з аккаунту Google

const app = initializeApp(firebaseConfig); // ініціалізація застосунку арр з аккаунту Google Firebase

refs.signUpButton.addEventListener('click', () => {
  refs.authorizationWindowSubmitButton.textContent = 'sign up';
  refs.signUpButton.classList.add('current');
  refs.signInButton.classList.remove('current');
}); // слухач події натискання на кнопку "sign up"

refs.signInButton.addEventListener('click', () => {
  refs.authorizationWindowSubmitButton.textContent = 'sign in';
  refs.signUpButton.classList.remove('current');
  refs.signInButton.classList.add('current');
}); // слухач події натискання на кнопку "sign in"

// import { User } from 'firebase/auth';
const auth = getAuth(app);

refs.authorizationWindowForm.addEventListener('submit', e => {
  e.preventDefault(); // блокування дій браузера за замовчуванням
  if (
    refs.authorizationWindowSubmitButton.textContent
      .trim()
      .toLocaleLowerCase() === 'sign up'
  ) {
    console.log('case sign up1');
    signUpWithEmailPassword();
    console.log('case sign up2');
  } else {
    console.log('case sign in1');
    onSignIn();
    console.log('case sign in2');
  }
}); // слухач "submit"у форми авторизації

function signUpWithEmailPassword() {
  const name = `${refs.authorizationWindowForm.elements.name.value}`;
  const email = `${refs.authorizationWindowForm.elements.email.value}`;
  const password = `${refs.authorizationWindowForm.elements.password.value}`;
  // [START auth_signup_password]
  // const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
  console.log(name);
  // const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      refs.btnLogin.classList.add('visually-hidden');
      refs.btnSigned.classList.remove('visually-hidden');
      refs.btnLoginTextSigned.textContent = name;
      refs.authorization.classList.toggle('is-hidden');
      refs.authorizationWindowForm.reset();
      Notify.success(
        `User ${name} with email address ${email} successfully created!`
      );
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
}

function onSignIn() { 
  const name = `${refs.authorizationWindowForm.elements.name.value}`;
  const email = `${refs.authorizationWindowForm.elements.email.value}`;
  const password = `${refs.authorizationWindowForm.elements.password.value}`;
  if (email.length < 4) {
    Notify.failure(
      `User email address is wrong! Please enter an email address.`
    );
    return;
  }
  if (password.length < 4) {
    Notify.failure(`User password is wrong! Please enter a password.`);
    return;
  }
  // Sign in with email and pass.
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
      refs.btnLogin.classList.add('visually-hidden');
      refs.btnSigned.classList.remove('visually-hidden');
      refs.btnLoginTextSigned.textContent = name;
      refs.authorization.classList.toggle('is-hidden');
      refs.authorizationWindowForm.reset();
      Notify.success(
        `User ${name} with email address ${email} successfully SIGNED!`
      );
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        Notify.failure(
          `Wrong password.`
        );        
      } else {
        Notify.failure(
          `${errorMessage}`
        );         
      }
      console.log(error);
    });  
}

refs.btnLogout.addEventListener('click', onSignOut);

function onSignOut() {
  try {
    auth
      .signOut()
      .then(() => {
        refs.btnLogin.classList.remove('visually-hidden'); // показати кнопку "Sign up"
        refs.btnSigned.classList.add('visually-hidden'); // приховати кнопку з імям авторизованого користувача
        Notify.success(
          `User ${refs.btnLoginTextSigned.textContent} with email address ${email} successfully SIGNED OUT!`
        ); // повідомлення про успішну операцію
      })
      .catch(error => {
        console.log(error);
        Notify.failure(
          `User ${refs.btnLoginTextSigned.textContent} with email address ${email} failed SIGNED OUT!`
        );
      });
  } catch (error) {
    console.log(error);
    Notify.failure(
      `User ${refs.btnLoginTextSigned.textContent} with email address ${email} failed SIGNED OUT!`
    );
  }
}

// function deletUser() {
//   if (auth.currentUser) {
//     auth.currentUser.delete;
//     auth.signOut();
//     refs.authorizationWindowForm.reset();
//     refs.authorization.classList.toggle("is-hidden");
//     Notify.success(
//       `User with email address ${email} successfully DELITED!`
//     );
//   } else {
//     Notify.failure(
//         `User must be authorized before deletion.`
//       );
//     };
// }

window.addEventListener('beforeunload', () => {
  try {
    auth
      .signOut()
      .then(responce => {
        console.log(responce);
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}); // автоматичний log out користувача при закритті сторінки браузера

function initApp() {
  // Listening for auth state changes.
  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('User is signed in.');
    } else {
      // User is signed out.
      console.log('User is signed out.');
    } // якщо слухач авторизований то ..., інакше ...
  });
} // ініціалізація застосунку. Додається слухач, який відслідковує зміну ствну авторизації користувача

window.addEventListener('load', () => {
  initApp();
}); // при завершенні завантаження всіх елементів "window" запускається функція ініціалізації застосунку
