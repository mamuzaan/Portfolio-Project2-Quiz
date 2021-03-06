var quiz = [
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
];

var questionNumber = 1;
var questionIndex = 0;
var score = 0;
var incorrectScore = 0;
var userName = "";
var usernameButton = document.getElementById("username-button");
var startButton = document.getElementById("start-button");
var mainBox = document.getElementById("main-box");
var userNameBox = document.getElementById("user-name-box");
var questionHolder = document.getElementById("question-box");
var userNameValidation = document.getElementById('user-name-validation-msg');
usernameButton.addEventListener('click', getUserName);
startButton.addEventListener('click', startQuiz);
document.querySelectorAll('.answer')
.forEach(function(button){
    button.addEventListener('click', validateAnswer);
});

document.getElementById('try-again').addEventListener('click', resetQuiz);

//take user name
function getUserName() {
    mainBox.classList.add('hide-content');
    userNameBox.classList.remove('hide-content');
    document.getElementById('question-box').classList.add('hide-content');
}

//quiz function start here
function startQuiz(){
    userName = document.getElementById('user-name').value;
    if(userName.length >= 1) {
        mainBox.classList.add('hide-content');
        userNameBox.classList.add('hide-content');
        document.getElementById('question-box').classList.remove('hide-content');
        displayQuestion(quiz[questionIndex], questionNumber);
    } else {
        userNameValidation.innerHTML = '<span style="color:red"> Please enter user name.</span>';
    }
}

//quiz function reset
function resetQuiz(){
    questionNumber = 1;
    questionIndex = 0;
    score = 0;
    userName = "";
    incorrectScore = 0;
    document.getElementById('result-contain').classList.add('hide-content');
    document.getElementById('user-name').value = "";
    userNameValidation.innerHTML = "";
    displayScore();
    displayIncorrectScore();
    mainBox.classList.remove('hide-content');
}

//Display question function
function displayQuestion(question, number){
    document.getElementById('question-content').innerText = question.question;
    document.getElementById('question-num').innerText = number;
    document.getElementById('answer1').innerText = question.options[0];
    document.getElementById('answer2').innerText = question.options[1];
    document.getElementById('answer3').innerText = question.options[2];
    document.getElementById('answer4').innerText = question.options[3];
}

// function for get next question and display correct and incorrect score
function getNextQuestion(){
    if (questionNumber < 10){
        questionNumber = questionNumber + 1;
        questionIndex = questionIndex + 1;  
        displayQuestion(quiz[questionIndex], questionNumber);
    }
    else {
        finishQuiz();
    }
}

function displayScore(){
    document.getElementById("point").innerText = score; 
}

function displayIncorrectScore(){
    document.getElementById("fail-point").innerText = incorrectScore; 
}

// Function for answer validation
function validateAnswer(event){
    var selectedAnswerText = event.target.innerText;
    var currentQuestion = quiz[questionIndex];
    var correctAnswerIndex = currentQuestion.answer;
    var correctAnswerText = currentQuestion.options[correctAnswerIndex];
    if (correctAnswerText.localeCompare(selectedAnswerText) === 0){
        score = score + 1;
        displayScore();
    }
    else{
        incorrectScore = incorrectScore + 1;
        displayIncorrectScore();
    }
    getNextQuestion();
}

// Finish quiz function here
function finishQuiz (){
    questionHolder.classList.add('hide-content');
    document.getElementById('result-contain').classList.remove('hide-content');
    document.getElementById('total-q').innerText = 10;
    document.getElementById('total-right').innerText = score;
    document.getElementById('total-fail').innerText = incorrectScore;
    var textToHighlight;

    // scoring system is (8-10 is welldone), (5-7 is avarage) and (0-4 is below average)
    if (score >= 8) {
        textToHighlight = '<span style="color:green"> Well done! ' + userName + ', you have good general knowledge.</span>';
    }
    else if (score >= 5) {
        textToHighlight = '<span style="color:black"> Average not bad ' + userName + ', but you have to learn more. </span>';
    }
    else {
        textToHighlight = '<span style="color:red"> Sorry ' + userName + ', go to wikipedia and practise and try again. </span>';
    }
    document.getElementById("com1").innerHTML = textToHighlight;
}
