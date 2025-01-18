function goBack() {
    window.history.back();
}

document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (validateEmail(email)) {
        alert('Password reset link has been sent to your email!');
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function backToSignIn() {
    window.location.href = './login.html';
}
