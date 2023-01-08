// const userName = '';
let eightBall = '';
let userQuestion = '';

let askButton = function () { // Creates the function for the butoton click to activate.
    randomNumber = Math.floor(Math.random() * 5) // SEt the random number generation inside the randomNumber variable.
    if (randomNumber === 0) {
        eightBall = 'No fucking shot LMAO!';
    } else if (randomNumber === 1) {
        eightBall = 'Why even still try?';
    } else if (randomNumber === 2) {
        eightBall = 'Cant even fucking begin to tell you...';
    } else if (randomNumber === 3) {
        eightBall = 'You have no future';
    } else if (randomNumber === 4) {
        eightBall = 'Fuck off';
    }
    document.getElementById('answer').innerHTML = eightBall; // Displays the answer inside of the div for answers
};
