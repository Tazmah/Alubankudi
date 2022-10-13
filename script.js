let userName = prompt("What is your name sir/ma?");
let condition = true;
let a = 1;
let b = 2;
let z = 3;
let randomNumber = Math.floor(Math.random() * z);
let userChoice;

while (condition) {
    userChoice = prompt(`${userName} Choose a random number between 1 and 2`);
    let range = () => {
        while (userChoice != randomNumber) {
            userChoice = prompt(`Choose a random number between ${a} and ${b}`);
        }
        if (userChoice == randomNumber) {
            b++; z++;
            // userChoice = prompt(`Choose a random number between ${a} and ${b}`);
            alert("hi")
            let randomNumber = Math.floor(Math.random() * z);
        }
        console.log(a, z);
    }
}