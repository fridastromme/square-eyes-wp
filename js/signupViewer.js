const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const passwordReenter = document.querySelector("#password__reenter");
const passwordReenterError = document.querySelector("#password__reenter-error");
const terms = document.querySelector("#terms");
const termsError = document.querySelector("#termsError");
const button = document.querySelector(".submit");

function validateForm(event) {
	event.preventDefault();
	if (validateEmail(email.value)) {
		emailError.style.display = "none";
		email.style.border = "none";
	} else {
		emailError.style.display = "block";
		email.style.border = "4px solid #ff5d1c";
		console.log("The email is not valid.");
	}
	if (validatePassword(password.value)) {
		passwordError.style.display = "none";
		password.style.border = "none";
	} else {
		passwordError.style.display = "block";
		password.style.border = "4px solid #ff5d1c";
		console.log("The password needs to be at lest 8 characters, with one upper case letter and one number.");
	}
	if (passwordReenter.value === password.value) {
		passwordReenterError.style.display = "none";
		passwordReenter.style.border = "none";
	} else {
		passwordReenterError.style.display = "block";
		passwordReenter.style.border = "4px solid #ff5d1c";
		console.log("The re-entered password does not match the original.");
	}
	if (terms.checked) {
		termsError.style.display = "none";
	} else {
		termsError.style.display = "block";
		console.log("The terms of use checkbox is unchecked.");
	}
	if ((validateEmail(email.value)) && (validatePassword(password.value)) && (passwordReenter.value === password.value) && (terms.checked)) {
		window.location.href = "viewer-profile.html";
	}
}
button.addEventListener("click", validateForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const emailMatches = regEx.test(email);
	return emailMatches;
}

function validatePassword(password) {
	const regEx = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
	const passwordMatches = regEx.test(password);
	return passwordMatches;
}

