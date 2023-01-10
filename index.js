let eightBall = "";
const userName = prompt("What is your name?"); // Asks for users name in a prompt. Will change later to where there is no prompt and user just types name on the page.

const askButton = function () {
    randomNumber = Math.floor(Math.random() * 10) // Random number gen.
    if (randomNumber === 0) {
        eightBall = "No fucking shot";
    } else if (randomNumber === 1) {
        eightBall = "Ask again";
    } else if (randomNumber === 2) {
        eightBall = "Don\’t think, you might sprain your brain";
    } else if (randomNumber === 3) {
        eightBall = "You are useless";
    } else if (randomNumber === 4) {
        eightBall = "Your ideas never work";
    } else if (randomNumber === 5) {
        eightBall = "Your goals are unattainable";
    } else if (randomNumber === 6) {
        eightBall = "You irritate me";
    } else if (randomNumber === 7) {
        eightBall = "I don\'t care";
    } else if (randomNumber === 8) {
        eightBall = "You are too needy";
    } else if (randomNumber === 9) {
        eightBall = "Deal with it";
    }
    document.getElementById("answer").innerHTML = eightBall + userName;
};