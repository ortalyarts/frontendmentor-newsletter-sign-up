// Switching photos for mobile/desktop screens

var heroImgHolder = document.querySelector('.hero-image-holder');
var img = document.querySelector('.hero-image-holder img');
var imgPlaceHolderDesktop = document.querySelector('.imgPlaceHolderDesktop');
var imgPlaceHolderMobile = document.querySelector('.imgPlaceHolderMobile');

(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;

    if (myWidth >= 880) {
      img.setAttribute("src", "./assets/images/illustration-sign-up-desktop.svg");
      imgPlaceHolderDesktop.appendChild(heroImgHolder);
    } else {
      img.setAttribute("src", "./assets/images/illustration-sign-up-mobile.svg");
      imgPlaceHolderMobile.appendChild(heroImgHolder);
    }
  };


})();
// Form validation
const btnSubscribe = document.querySelector('.btn-subscribe');

const emailInvalid = document.querySelector('#invalid-message-email');
const inputEmail = document.querySelector('#email');
const successMessage = document.querySelector('.success-message-container');
const userEmail = document.querySelector('#userEmail');
const mainHolder = document.querySelector('main');
const btnDismiss = document.querySelector('#btn-dismiss');
const body = document.querySelector('body');

const showSuccessMessage = () =>{
  userEmail.innerText=inputEmail.value;
  mainHolder.classList.add('hide');
  successMessage.classList.remove('hide');
}
btnDismiss.addEventListener('click', () =>{
  inputEmail.value='';
  successMessage.classList.add('hide');
  mainHolder.classList.remove('hide');
})

// Function validating the filds
function validate(inputId, inputType){
  let n = inputId; // get input id
  let nType = inputType; // get input type
  let nInvalidMessage = n.parentNode.querySelector('.invalid-message');

  function addError (){
    nInvalidMessage.classList.add('activeMessage');
    n.classList.add('input-invalid');
  }
  function removeError (){
    nInvalidMessage.classList.remove('activeMessage');
    n.classList.remove('input-invalid');
  }
  if (n.value == "") {
    addError();
  } 
  // Email validation 
  else if (nType == "email") {
    var rea = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.\w+$/;
    var Email = inputEmail.value;
    var x = rea.test(Email);
    if (!x) { // Switch error message if Email is not formated correctly
      nInvalidMessage.classList.remove('activeMessage');
      n.classList.add('input-invalid');
      emailInvalid.classList.add('activeMessage');
    }
    else{
      n.classList.remove('input-invalid');
      emailInvalid.classList.remove('activeMessage');
      showSuccessMessage();
    }
  }
  else{
    removeError();
    showSuccessMessage();
  }
}

btnSubscribe.addEventListener('click', () =>{
  // Calling validation for all the fields
  validate(email, 'email');
})

