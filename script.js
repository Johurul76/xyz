function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function login() {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    if (password === "123") {
        // Password correct, redirect to dashboard.html
        window.location.href = "dashboard.html";
    } else {
        // Show error message if password is incorrect
        errorElement.textContent = "Incorrect password. Please try again.";
    }
}
