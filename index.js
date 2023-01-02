let userQuestion = '';
let eightBall = '';
let randomNumber = '';

//eightBall= sets up the answers to be displayed on button click.
if (randomNumber === 0) {
    eightBall = 'No shot LMAO';
} else if (randomNumber === 1) {
    eightBall = 'Get Fucked...';
} else if (randomNumber === 2) {
    eightBall = 'Fucking A bud, Sounds fucking good to me!';
} else if (randomNumber === 3) {
    eightBall = 'Not a fucking clue...';
} else if (randomNumber === 4) {
    eightBall = 'Just fucking try it already...';
}

document.getElementById('askButton').onclick = function() {
    eightBall = Math.floor(Math.random() * 5);
    document.getElementById('xLabel').innerHTML = eightBall;
};