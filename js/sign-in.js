const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const button = document.querySelector(".submit-2");

function validateForm(event) {

	event.preventDefault();
    
	if ((validateEmail(email.value))) {
		window.location.href = "producer-profile.html";
	} else {
		passwordError.style.display = "block";
		console.log("Wrong email or password. Please try again.")
	}
}
button.addEventListener("click", validateForm);

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const emailMatches = regEx.test(email);
	return emailMatches;
}
