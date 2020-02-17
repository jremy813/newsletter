const next = document.querySelector("#nextButton");
const email = document.getElementById("email");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const SignUpButton = document.getElementById("signUpButton");
const title = document.querySelector("h3");

const signUp = {
  nextSlide: function() {
    next.addEventListener("click", function(event) {
      event.preventDefault();
      if (email.value.includes("@")) {
        console.log(`Email: ${email.value}`);
        title.textContent = "Enter First and Last name";
        email.classList.add("hidden");
        firstName.classList.remove("hidden");
        lastName.classList.remove("hidden");
        next.classList.add("hidden");
        SignUpButton.classList.remove("hidden");
      } else {
        alert("Please enter a valid email");
      }
    });
  },
  lastSlide: function() {
    SignUpButton.addEventListener("click", function(event) {
      event.preventDefault();
      if (firstName.value.length && lastName.value.length > 2) {
        console.log(`First Name: ${firstName.value}`);
        console.log(`Last Name: ${lastName.value}`);
        title.textContent = "Thank you for signing up!";
        firstName.classList.add("hidden");
        lastName.classList.add("hidden");
        SignUpButton.classList.add("hidden");
      } else {
        alert("Enter a first and last name");
      }
    });
  }
};

signUp.nextSlide();
signUp.lastSlide();
