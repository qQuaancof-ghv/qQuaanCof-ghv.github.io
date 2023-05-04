let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '60px';
});


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No Number!');
    } else if (guess === secretNumber) {
        displayMessage('Chúc mừng bạn đã đoán đúng <3!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '100px';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Bạn đoán số cao quá rồi :(' : 'Bạn đoán số thấp quá rồi! :(');
            document.querySelector('.score').textContent = score;
            score--;
        } else {
            displayMessage('Bạn đã thua cuộc! :(');
            document.querySelector('.score').textContent = 0;
        }
    }
});