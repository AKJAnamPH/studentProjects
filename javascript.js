const prompt = require("prompt-sync")();

console.log("Welcome to the Quiz!")

const answer1 = prompt("What is the brain of the computer?");
const correct_answer1 = "CPU";

if(answer1.toUpperCase() === correct_answer1){
    console.log("You got it right!");
}else{
    console.log("You got it wrong...");
}