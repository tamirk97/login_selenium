function validateLogin() {
    // Example of hardcoded credentials
    const validUsername = 'admin';
    const validPassword = 'password123';
    
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Clear previous messages
    messageDiv.textContent = '';
    
    // Simple validation check
    if (username === validUsername && password === validPassword) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password. Try again!';
    }
    
    // Prevent form from submitting (for testing purposes)
    return false;
}
