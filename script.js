document.getElementById('registrationForm').addEventListener('submit', function(e) {
    let valid = true;

    // this clears all previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Get values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const message = document.getElementById('message').value.trim();

    // a code for username validation
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Name is required.';
        valid = false;
    }

    // for email validation (regex used)
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        valid = false;
    }

    // for password validation
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    }

    // for confirming passwords
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        valid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        valid = false;
    }

    // for message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});