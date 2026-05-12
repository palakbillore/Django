const changeTextBtn = document.getElementById('change-text-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const welcomeMessage = document.getElementById('welcome-message');
const body = document.body;
changeTextBtn.addEventListener('click', () => {
    welcomeMessage.textContent = "You've clicked the button!";
    welcomeMessage.classList.add('animate');
    setTimeout(() => {
        welcomeMessage.classList.remove('animate');
    }, 500);
});
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});




