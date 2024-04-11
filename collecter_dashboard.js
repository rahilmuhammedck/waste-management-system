document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user details from local storage
    var userDetails = JSON.parse(localStorage.getItem('userDetails'));

    // Check if user details exist
    if (userDetails) {
        // Display user details on the dashboard
        displayUserDetails(userDetails);
    } else {
        // If no user details found, display a message
        var userDetailsContainer = document.getElementById('user-details');
        userDetailsContainer.innerHTML = '<p>No user details found.</p>';
    }
});

function displayUserDetails(userDetails) {
    // Get the container to display user details
    var userDetailsContainer = document.getElementById('user-details');

    // Create HTML to display user details
    var userDetailsHTML = `
        <h2>User Details:</h2>
        <p><strong>Name:</strong> ${userDetails.name}</p>
        <p><strong>Phone Number:</strong> ${userDetails.phone}</p>
        <p><strong>Location:</strong> ${userDetails.location}</p>
        <p><strong>Waste Category:</strong> ${userDetails.wasteCategory}</p>
    `;

    // Display user details in the container
    userDetailsContainer.innerHTML = userDetailsHTML;
}
