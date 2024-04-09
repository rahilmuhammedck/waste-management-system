document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve user credentials from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Check if entered credentials match stored credentials
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        // Redirect to dashboard or home page
        // Replace 'dashboard.html' with the actual dashboard or home page URL
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});