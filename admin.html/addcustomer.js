// Retrieve customers from localStorage or initialize an empty array
let customers = JSON.parse(localStorage.getItem('customers')) || [];

// Log the customers array to the console
console.log(customers);

// Add an event listener for the Submit button
document.getElementById('Submit').addEventListener('click', () => {
    saveCustomer();
});

function saveCustomer() {
    // Get input values from the form
    let name1 = document.getElementById('customer-name').value.trim();
    let number = document.getElementById('customer-number').value.trim();
    let address = document.getElementById('customer-address').value.trim();

    // Validate input fields
    if (!name1 || !number || !address) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a customer object
    let newCustomer = {
        name: name1,
        number: number,
        address: address
    };

    // Add the new customer to the array
    customers.push(newCustomer);

    // Save the updated array to localStorage
    localStorage.setItem('customers', JSON.stringify(customers));

    // Log the updated customers array
    console.log(customers);

    // Optionally, clear the form fields after saving
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-number').value = '';
    document.getElementById('customer-address').value = '';

    alert("Customer saved successfully!");
}

