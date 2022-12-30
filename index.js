const userQuestion = '';
let eightBall = '';
const randomNumber = '';


if (randomNumber === 0) {
    eightBall = 'No shot LMAO';
} else if (randomNumber === 1) {
    eightBall = 'Sounds good to me!';
} else if (randomNumber === 2) {
    eightBall = 'Fucking A bud, Sounds fucking good to me!'
} else if (randomNumber === 3) {
    eightBall = 'Not a fucking clue...';
} else if (randomNumber === 4) {
    eightBall = 'Just fucking try it already.......';
}

document.getElementById('btn').onclick = function () {
    let randomNumber = Math.floor(Math.random() * 5);
    document.getElementById('op').innerHTML = op;
}

// console.log(eightBall);