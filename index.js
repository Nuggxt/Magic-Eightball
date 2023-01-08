// const userName = '';
let eightBall = '';
let userQuestion = '';

let askButton = function () { // Creates the function for the butoton click to activate.
    randomNumber = Math.floor(Math.random() * 5) // SEt the random number generation inside the randomNumber variable.
    if (randomNumber === 0) {
        eightBall = 'No fucking shot LMAO!';
        console.log(eightBall)
    } else if (randomNumber === 1) {
        eightBall = 'Why even still try?';
        console.log(eightBall)
    } else if (randomNumber === 2) {
        eightBall = 'Cant even fucking begin to tell you...';
        console.log(eightBall)
    } else if(randomNumber === 3) {
        eightBall = 'You have no future';
        console.log(eightBall)
    } else if(randomNumber === 4) {
        eightBall = 'Fuck off';
        console.log(eightBall)
    }
}
