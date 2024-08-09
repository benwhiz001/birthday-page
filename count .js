
let countdown = document.getElementById('countdown');
let countdownNumber = 10;

countdown.innerText = countdownNumber;

const countdownInterval = setInterval(() => {
    countdownNumber--;
    if (countdownNumber > 0) {
        countdown.innerText = countdownNumber;
    } else {
        clearInterval(countdownInterval);
        // After the countdown, load the birthday page
        window.location.href = 'bday.html';
    }
}, 1000);
