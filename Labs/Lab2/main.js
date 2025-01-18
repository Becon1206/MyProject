function reloadPage() {
    location.reload();
}

const loginLink = document.getElementById('login-link');
const loginContainer = document.getElementById('login-container');
const overlay = document.getElementById('overlay');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

loginLink.addEventListener('click', function (e) {
    e.preventDefault();
    loginContainer.classList.add('show');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', function () {
    loginContainer.classList.remove('show');
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 300);
});

tabLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        tabLinks.forEach(function (tab) {
            tab.classList.remove('active');
        });

        link.classList.add('active');

        tabContents.forEach(function (content) {
            content.classList.remove('active');
        });

        const target = link.id.split('-')[0];
        document.getElementById(target).classList.add('active');
    });
});