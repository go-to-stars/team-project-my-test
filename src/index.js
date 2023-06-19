const refs = {
  buttonSwitch: document.querySelector('.btn-switch'),
  body: document.querySelector('body'),
  headerImgLight: document.querySelector('.header-img-light'),
  headerImgDark: document.querySelector('.header-img-dark'),
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
  signUpButton: document.querySelector('.up'),
  signInButton: document.querySelector('.in'),
  authorizationWindowForm: document.querySelector('.authorization-window-form'),
  authorizationWindowSignButton: document.querySelectorAll('.authorization-window-sign-button'),
  
  // authorizationWindowInput: document.querySelector(
  //   ".authorization-window-input"
  // ),

  //   searchForm: document.querySelector("#search-form"),
  //   preamble: document.querySelector(".preamble"),
  //   imagesList: document.querySelector(".gallery"),
  //   loader: document.querySelector(".loader"),
  //   guard: document.querySelector(".guard"),
};

// refs.authorizationWindowSubmitButton,
//   addEventListener('submit', e => {
//     e.preventDefault();
//     // console.log(refs.authorizationWindowForm);
//     console.log(refs.authorizationWindowForm.elements.name.value);
//     console.log(refs.authorizationWindowForm.elements.email.value);
//     console.log(refs.authorizationWindowForm.elements.password.value);
//   });

let thema = true;
// refs.buttonSwitch.addEventListener("click", () => {
//   refs.body.classList.toggle("dark");
//   refs.headerImgLight.classList.toggle("visually-hidden");
//   refs.headerImgDark.classList.toggle("visually-hidden");
//   refs.header.classList.toggle("dark");
// });

// authorizArr.forEach((el) => {
//   console.log(el);
// });

// authorizArr.map((el) => {
//   console.log(el);
//   console.log(el.classList);
//   el.classList.toggle("dark");
// });

// function changeThema() { 
  if (localStorage.theme === 'dark'){
    refs.headerImgLight.classList.add('visually-hidden');
  refs.headerImgDark.classList.add('visually-hidden');
  refs.header.classList.add('dark');
  refs.buttonSwitch.classList.add('dark');
  refs.knobsBig.classList.add('dark');
  refs.knobsMedium.classList.add('dark');
  refs.knobsSmall.classList.add('dark');
    refs.authorizationWindow.classList.add('dark');
  refs.authorizationWindowInput.forEach(el => {
    el.classList.add('dark');
  });
  refs.authorizationWindowSignButton.forEach(el => {
    el.classList.add('dark');
  });
  refs.authorizationWindowCloseButtonIcon.classList.add('dark');
  refs.authorizationWindowIcon.forEach(el => {
    el.classList.add('dark');
  });
  refs.authorizationWindowSubmitButton.classList.add('dark');
  // refs.signUpButton.classList.add('dark');
  // refs.signInButton.classList.add('dark');

} 
// }

refs.buttonSwitch.addEventListener('click', () => {
  refs.headerImgLight.classList.toggle('visually-hidden');
  refs.headerImgDark.classList.toggle('visually-hidden');
  refs.header.classList.toggle('dark');
  refs.buttonSwitch.classList.toggle('dark');
  refs.knobsBig.classList.toggle('dark');
  refs.knobsMedium.classList.toggle('dark');
  refs.knobsSmall.classList.toggle('dark');
  refs.authorizationWindow.classList.toggle('dark');
  refs.authorizationWindowInput.forEach(el => {
    el.classList.toggle('dark');
  });
  refs.authorizationWindowSignButton.forEach(el => {
    el.classList.toggle('dark');
  });
  refs.authorizationWindowCloseButtonIcon.classList.toggle('dark');
  refs.authorizationWindowIcon.forEach(el => {
    el.classList.toggle('dark');
  });
  refs.authorizationWindowSubmitButton.classList.toggle('dark');
  // refs.signUpButton.classList.toggle('dark');
  // refs.signInButton.classList.toggle('dark');

  if (localStorage.getItem('theme') === 'dark') {
    refs.body.style.color = '#111111';
    refs.body.style.backgroundColor = '#d0d0d0';    
    localStorage.setItem('theme', 'light');
  } else {
    refs.body.style.color = '#d0d0d0';
    refs.body.style.backgroundColor = '#111111';    
    localStorage.setItem('theme', 'dark');    
  }
});
