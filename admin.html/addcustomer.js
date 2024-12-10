let customers = JSON.parse(localStorage.getItem('customers')) || []; 
console.log(customers);

document.getElementById('Submit').addEventListener('click', () => {
    saveCustomer();
});

function saveCustomer() {
    let name1 = document.getElementById('customer-name').value;
    let number = document.getElementById('customer-number').value;
    let address = document.getElementById('customer-address').value;

    // Create a custo

    let newCustomer = {
        name: name1,
        number: number,
        address: address
    };

    // Add the new customer to the array
    customers.push(newCustomer);

    // Save the updated array to localStorage
    localStorage.setItem('customers', JSON.stringify(customers));

    console.log(customers);
}

