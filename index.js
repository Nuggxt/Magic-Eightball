let eightBall = "";
let userQuestion = "";

let askButton = function () { // Creates the function for the butoton click to activate.
    randomNumber = Math.floor(Math.random() * 10) // Set the random number generation inside the randomNumber variable.
    if (randomNumber === 0) {
        eightBall = "No fucking shot";
    } else if (randomNumber === 1) {
        eightBall = "Ask again";
    } else if (randomNumber === 2) {
        eightBall = "Don\’t think, it might sprain your brain";
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
    document.getElementById("answer").innerHTML = eightBall; // Displays the answer inside of the div for answers
};
// Try to recreate the if... else  by doing it with a switch statement
