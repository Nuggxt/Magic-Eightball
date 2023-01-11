const userName = prompt("What is your name?"); // Asks for users name in a prompt. Will change later to where there is no prompt and user just types name on the page.
eightBall = "";

const askButton = function () {
    randomNumber = Math.floor(Math.random() * 10)
    switch (randomNumber) {
        case 0:
            eightBall = "No Fucking Shot ";
            break;
        case 1:
            eightBall = "Ask again later ";
            break;
        case 2:
            eightBall = "You are worthless "
            break;
        case 3:
            eightBall = "Your ideas will never work "
            break;
        case 4:
            eightBall = "Your goals are unattainable "
            break;
        case 5:
            eightBall = "Why do you keep asking questions? "
            break;
        case 6:
            eightBall = "Very doubtful "
            break;
        case 7:
            eightBall = "Outlook not so good "
            break;
        case 8:
            eightBall = "My reply is no "
            break;
        case 9:
            eightBall = "Don't count on it "
            break;
            case 10:
                eightBall = "Cannot predict now "
                break;
    }
    document.getElementById("answer").innerHTML = eightBall + userName;
};