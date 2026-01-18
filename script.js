const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const messageEl = document.getElementById("message");

// Hardcoded credentials (allowed as per assignment)
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "1234";

const btnText = document.getElementById("btnText");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    messageEl.textContent = "";
    messageEl.className = "message";

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
        showError("Please enter your username and password.");
        return;
    }

   
    btnText.textContent = "Signing in...";
    
    setTimeout(() => {
        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
            showSuccess("You have successfully signed in.");
            loginForm.reset();
        } else {
            showError("The username or password you entered is incorrect.");
        }

        btnText.textContent = "Sign In";
    }, 800); 
});

function showError(msg) {
    messageEl.textContent = msg;
    messageEl.classList.add("error");
}

function showSuccess(msg) {
    messageEl.textContent = msg;
    messageEl.classList.add("success");
}
