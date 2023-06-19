import { Notify } from 'notiflix/build/notiflix-notify-aio'; // імпорт бібліотеки notiflix
// const firebaseConfig = {
//   apiKey: 'AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms',
//   authDomain: 'js-firebase-auth-cb2eb.firebaseapp.com',
//   projectId: 'js-firebase-auth-cb2eb',
//   storageBucket: 'js-firebase-auth-cb2eb.appspot.com',
//   messagingSenderId: '233176764690',
//   appId: '1:233176764690:web:5fcced0357c9421e88e3cb',
// };

const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: 'AIzaSyAb7qX9rlncTGJ67DqxnbFRQ3lMV1rBMms',
  authDomain: 'js-firebase-auth-cb2eb.firebaseapp.com',
  projectId: 'js-firebase-auth-cb2eb',
  storageBucket: 'js-firebase-auth-cb2eb.appspot.com',
  messagingSenderId: '233176764690',
  appId: '1:233176764690:web:5fcced0357c9421e88e3cb',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
      throw new Error(
        Notify.failure('Sorry, the search field cannot be empty. Please try again.',
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    ));
  } else {
    return config;
  }
}

// throw new Error(
//   'No Firebase configuration object provided.' +
//     '\n' +
//     "Add your web app's configuration object to firebase-config.js"
// );