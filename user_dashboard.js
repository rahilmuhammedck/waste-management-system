document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    var wasteCategory = document.getElementById('waste-category').value;

    // Create an object to store user details
    var userDetails = {
        name: name,
        phone: phone,
        location: location,
        wasteCategory: wasteCategory
    };

    // Store user details in local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Display a success message or redirect to another page
    alert('Details updated successfully!');
    // Redirect to another page if needed
});