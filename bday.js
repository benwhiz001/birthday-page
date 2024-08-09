// bday.js
document.getElementById('celebrateButton').addEventListener('click', function () {
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = ''; // Clear existing confetti
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

// Automatically click the celebrate button every 5 seconds
setInterval(() => {
    document.getElementById('celebrateButton').click();
}, 7000);
