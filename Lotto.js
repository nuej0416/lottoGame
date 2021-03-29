// 로또 추첨기

let numbers = Array(45)
    .fill()
    .map(function (w, index) {
        return index + 1;
    });

let shuffle = [];
while (numbers.length > 0) {
    let num = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    shuffle.push(num);
}

let bonus = shuffle[shuffle.length-1];
let winNum = shuffle
    .slice(0, 6)
    .sort(function (p, c) {
        return p - c;
    });

let result = document.querySelector('.result');

function coloringBall (n, result) {
    let ball = document.createElement('div');
    ball.textContent = n;
    ball.className = 'ball';

    let bg;
    let fc;

    if (n <= 10) {
        bg = 'red';
        fc = 'white';
    } else if (n <= 20) {
        bg = 'orange';
        fc = 'black';
    } else if (n <= 30) {
        bg = 'yellow';
        fc = 'black';
    } else if (n <= 40) {
        bg = 'blue';
        fc = 'white';
    } else {
        bg = 'green';
        fc = 'white';
    }
    ball.style.background = bg;
    ball.style.color = fc;
    result.appendChild(ball);
}

for (let i = 0; i < winNum.length; i += 1) {
    (function closure(j) {
        setTimeout(function () {
            coloringBall(winNum[j], result);
        }, (j + 1) * 1000);
    }) (i);
}

setTimeout(function callback() {
    let col = document.querySelector('.bonus');
    coloringBall(bonus, col);
}, 7000);