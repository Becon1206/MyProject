// Get necessary elements
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const backButton = document.querySelector('.back-button');
const signInForm = document.querySelector('.sign-in-container form');
const signUpForm = document.querySelector('.sign-up-container form');

// Sample data for login
const users = [
    {
        email: "user@example.com",
        password: "password123"
    },
    {
        email: "admin@example.com",
        password: "admin123"
    }
];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = '../index.html';
    } else {
        alert('Invalid login credentials. Please try again!');
    }
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    users.push({ email, password });
    alert('Registration successful! You can now log in.');
    container.classList.remove('right-panel-active');
});

function goBack() {
    window.history.back();
}
