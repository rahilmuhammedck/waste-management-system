document.getElementById('admin-login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password match static admin credentials
    if (username === 'admin' && password === 'admin123') {
        // If credentials match, redirect to collector dashboard
        window.location.href = 'collecter_dashboard.html';
    } else {
        // If credentials do not match, display an error message
        alert('Invalid username or password. Please try again.');
    }
});