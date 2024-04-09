document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Store user credentials in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to login page after sign up
    window.location.href = 'login.html';
});