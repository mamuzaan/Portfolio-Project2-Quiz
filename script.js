let quiz = [
    {
        question: "what is the capital of Sweden?",
        options: ["Uppsala", "Göteborg", "Stockholm", "Malmö"],
        answer: 2
    },
    {
        question: "How meny municipalities are there in Stockholm county?",
        options: ["30", "35", "15", "26"],
        answer: 3
    },
    {
        question: "How many inhabitants are there in Sweden?",
        options: ["10 million", "12 million", "9 million", "14 million"],
        answer: 0
    },
    {
        question: "Who is the current King of Sweden?",
        options: ["Carl XVI Gustav", "Gustav Vasa", "Magnus Stenbock", "Fredrik"],
        answer: 0
    },
    {
        question: "What is the currency of Sweden?",
        options: ["Euro(EU)", "Crown(SEK)", "Doller(USD)", "Indian(Ropies)"],
        answer: 1
    },
    {
        question: "How meny official minorities are there in Sweden?",
        options: ["8 language", "3 language", "7 language", "5 language"],
        answer: 3
    },
    {
        question: "What is Kebnekaise",
        options: ["Troll", "Swedish dish", "Swedish highest mountain", "Swedish Pizza"],
        answer: 2
    },
    {
        question: "What is the coldest temperature ever recorded in Sweden?",
        options: ["-46,6 ºC", "-52,6 ºC", "-42,6 ºC", "-53,0 ºC",],
        answer: 3
    },
    {
        question: "What two colours are in the swedish flag?",
        options: ["Blue and White", "Blue and Yellow", "Blue and Red", "Blue and Green"],
        answer: 1
    },
    {
        question: "Which Swedish rock-band had a major hit with 'Hate to say I told you so'?",
        options: ["The Cardigans", "Soundtrack of Lives", "The Hives", "Cesars"],
        answer: 2
    }
]

let shuffleQuestions = [];
let questionNumber = 1;
let questionIndex = 0;
let score = 0;
let incorrectScore = 0;
let userName = "";
let usernameButton = document.getElementById("username-button");
let startButton = document.getElementById("start-button");
let mainBox = document.getElementById("main-box");
let userNameBox = document.getElementById("user-name-box");
let questionHolder = document.getElementById("question-box");
usernameButton.addEventListener('click', getUserName);
startButton.addEventListener('click', startQuiz);
document.querySelectorAll('.answer')
      .forEach(button => button.addEventListener('click', validateAnswer));
document.getElementById('try-again').addEventListener('click', resetQuiz);

// Quiz function start here

function shuffleQuestionsArray(array) {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
      // Remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

