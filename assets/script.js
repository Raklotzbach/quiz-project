var timer =document.querySelector("#timer");
var startButton =document.querySelector("#startBtn")
var startScreen =document.querySelector("#game-start")
var secondsLeft = 90;
const quizStart =document.querySelector("#quiz-begin")
var currentQuestion;
var option1 =document.querySelector("#answer1")
var option2 =document.querySelector("#answer2")
var option3 =document.querySelector("#answer3")
var option4 =document.querySelector("#answer4")
var finalScore =document.querySelector("#final-score")
var submitButton =document.querySelector("#submitButton")
var winner =document.querySelector("#name")


startButton.addEventListener("click", startGame);

function startGame() {
    time();
    quizBegin();
    startButton.removeEventListener("click", startGame)
    startScreen.classList.add('hide');
};

function time() {
    timer.textContent = secondsLeft
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);  
};

function timeLoss1 (){
    secondsLeft = secondsLeft-10;
    displayQuestion2();
}

function timeLoss2 (){
    secondsLeft = secondsLeft-10;
    displayQuestion3();
}

function timeLoss3 (){
    secondsLeft = secondsLeft-10;
    displayQuestion4();
}

function timeLoss4 (){
    secondsLeft = secondsLeft-10;
    endGame();
}

function quizBegin() {
    quizStart.classList.remove('hide');
    currentQuestion = 0;
    displayQuestion1();
}

function displayQuestion1() {
    startScreen.classList.add('hide');
    let question = questions[currentQuestion];
    currentQuestion = 0;
    
    let questionEl =document.querySelector("#questionText");
    questionEl.textContent = question.questionText;

    var optionAnswers = ["Red", "Blue", "Yellow", "Purple"]
    var correct = '';
    option1.textContent = optionAnswers [0]
    option2.textContent = optionAnswers [1]
    option3.textContent = optionAnswers [2]
    option4.textContent = optionAnswers [3]
   
    option3.addEventListener("click", displayQuestion2);
    option1.addEventListener("click", timeLoss1);
    option2.addEventListener("click", timeLoss1);
    option4.addEventListener("click", timeLoss1);
}

function displayQuestion2() {
    option3.removeEventListener("click", displayQuestion2)
    option1.removeEventListener("click", timeLoss1);
    option2.removeEventListener("click", timeLoss1);
    option4.removeEventListener("click", timeLoss1);
    startScreen.classList.add('hide');
    let question = questions[currentQuestion + 1];
    currentQuestion = 0;
    
    let questionEl =document.querySelector("#questionText");
    questionEl.textContent = question.questionText;

    var optionAnswers = ["New Mexico", "Arizona", "Hawaii", "Japan"]
    
    option1.textContent = optionAnswers [0]
    option2.textContent = optionAnswers [1]
    option3.textContent = optionAnswers [2]
    option4.textContent = optionAnswers [3]

    option2.addEventListener("click", displayQuestion3);
    option3.addEventListener("click", timeLoss2);
    option1.addEventListener("click", timeLoss2);
    option4.addEventListener("click", timeLoss2);
}

function displayQuestion3() {
    option2.removeEventListener("click", displayQuestion3)
    option3.removeEventListener("click", timeLoss2);
    option1.removeEventListener("click", timeLoss2);
    option4.removeEventListener("click", timeLoss2);
    startScreen.classList.add('hide');
    let question = questions[currentQuestion + 2];
    currentQuestion = 0;
    
    let questionEl =document.querySelector("#questionText");
    questionEl.textContent = question.questionText;

    var optionAnswers = ["Birds", "Pizza", "Puppies", "Fish"]
    
    option1.textContent = optionAnswers [0]
    option2.textContent = optionAnswers [1]
    option3.textContent = optionAnswers [2]
    option4.textContent = optionAnswers [3]
   
    option4.addEventListener("click", displayQuestion4);
    option1.addEventListener("click", timeLoss3);
    option2.addEventListener("click", timeLoss3);
    option3.addEventListener("click", timeLoss3);
}

function displayQuestion4() {
    option4.removeEventListener("click", displayQuestion4)
    option1.removeEventListener("click", timeLoss3);
    option2.removeEventListener("click", timeLoss3);
    option3.removeEventListener("click", timeLoss3);
    startScreen.classList.add('hide');
    let question = questions[currentQuestion + 3];
    currentQuestion = 0;
    
    let questionEl =document.querySelector("#questionText");
    questionEl.textContent = question.questionText;

    var optionAnswers = ["Fourty", "For", "Four", "Fourteen"]
    
    option1.textContent = optionAnswers [0]
    option2.textContent = optionAnswers [1]
    option3.textContent = optionAnswers [2]
    option4.textContent = optionAnswers [3]
   
    option3.addEventListener("click", endGame);
    option1.addEventListener("click", timeLoss4);
    option2.addEventListener("click", timeLoss4);
    option4.addEventListener("click", timeLoss4);
}

var score =document.querySelector("#score")

function endGame() {
    option3.removeEventListener("click", endGame)
    option1.removeEventListener("click", timeLoss4);
    option2.removeEventListener("click", timeLoss4);
    option4.removeEventListener("click", timeLoss4);
    quizStart.classList.add('hide')
    finalScore.classList.remove('hide')
    timer.classList.add('hide')
    
    score.textContent = secondsLeft
    if (secondsLeft >= 0) {
        clearInterval(timerInterval)
        }
    }
submitButton.addEventListener("click", function(event){
    savedHighscore(event)
})



function savedHighscore(event) {
    event.preventDefault();

    var vitamin = {
        scorez: score.value,
        player: winner.value,
    }

    if (winner.value === "") {
    alert("Please Enter Your Name!")
    } else 

    localStorage.setItem('name', JSON.stringify(vitamin));
    renderMessage();
}

function renderMessage() {
    var jams = (localStorage.getItem('name'));
    document.querySelector("#winEl").textContent = jams;
}
    



var questions = [
    {questionText: "What color is the sun?"},
    {questionText: "Where is the Grand Canyon?"},
    {questionText: "What lives in water?"},
    {questionText: "What is 2 plus 2?"}
]






