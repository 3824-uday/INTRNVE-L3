document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate form values
  let valid = true;

  if (!name) {
    valid = false;
    document.getElementById('nameError').textContent = 'Name is required';
  }

  if (!email) {
    valid = false;
    document.getElementById('emailError').textContent = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    valid = false;
    document.getElementById('emailError').textContent = 'Email address is invalid';
  }

  if (!password) {
    valid = false;
    document.getElementById('passwordError').textContent = 'Password is required';
  } else if (password.length < 6) {
    valid = false;
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
  }

  if (valid) {
    // Submit the form
    console.log('Form submitted successfully', { name, email, password });
    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
  }
});