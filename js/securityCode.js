const cvv = document.querySelector ('#cvv');
const cvvError = document.querySelector ('#cvvError');
const button = document.querySelector ('.submit-3');

function validateForm (event) {
  event.preventDefault ();
  if (validateCvv (cvv.value)) {
    cvvError.style.display = 'none';
    window.location.href = '/purchase-confirmation.html';
  } else {
    cvvError.style.display = 'block';
    console.log ('Please enter 3 digits.');
  }
}
button.addEventListener ('click', validateForm);

function checkLength (value, len) {
  if (value.trim ().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateCvv (cvv) {
  const regEx = /^[0-9]{3}$/;
  const cvvMatches = regEx.test (cvv);
  return cvvMatches;
}
