// Select the form and elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const editBtn = document.getElementById('editBtn');

// Select error message spans
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

// Review step elements
const reviewName = document.getElementById('reviewName');
const reviewEmail = document.getElementById('reviewEmail');
const reviewPassword = document.getElementById('reviewPassword');

// Add event listener to Next button
nextBtn.addEventListener('click', function() {
    let valid = true;

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passError.textContent = '';

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Full Name is required.';
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate Password
    if (passwordInput.value.trim() === '') {
        passError.textContent = 'Password is required.';
        valid = false;
    } else if (passwordInput.value.length < 8) {
        passError.textContent = 'Password must be at least 8 characters long.';
        valid = false;
    }

    // If valid, show review step
    if (valid) {
        // Hide step 1 and show step 2 (review step)
        document.querySelector('.step-1').classList.remove('active');
        document.querySelector('.step-2').classList.add('active');

        // Display review information
        reviewName.textContent = `Name: ${nameInput.value}`;
        reviewEmail.textContent = `Email: ${emailInput.value}`;
        reviewPassword.textContent = `Password: ${'*'.repeat(passwordInput.value.length)}`;
    }
});

// Add event listener to Edit button
editBtn.addEventListener('click', function() {
    // Show step 1 (form) and hide step 2 (review)
    document.querySelector('.step-2').classList.remove('active');
    document.querySelector('.step-1').classList.add('active');
});

// Handle final form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account Created Successfully!');
    form.reset(); // Reset the form after successful submission
});
