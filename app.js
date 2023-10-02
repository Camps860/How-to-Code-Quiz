var startView = document.getElementById('start-view');
var startButton = document.getElementById('start-button');
var questionView = document.getElementById('question-view');
var endView = document.getElementById('end-view');

// Timer Variables
var timerInterval;
var time = 60;
var timerElement = document.getElementById("countdownTimer");

var questionIndex = 0;


function startQuiz () {
    // hide our Start View
    startView.style.display = "none";

    // Display our Question view
    questionView.style.display = "block";

    // Start the timer
    timerElement.textContent = time;
    timerInterval = setInterval(function() {
        time--;
        timerElement.textContent = time;

        if(time <= 0){
            endQuiz()
        }
    } , 1000)

    //Call the first question function
    populateQuestion()
}

function populateQuestion() {

    //Use the question Index to populate the first question

}


function checkAnswers() {
    // Check the answer


    // After you checked the answer, inclrease the question index by 1
}



function endQuiz () {
    console.log('QUIZ IS OVERRRRR!!!!!!)')
    // Hide Question View



    // Display End View


    // Clear Timer
    clearInterval(timerInterval);

}






startButton.addEventListener('click', startQuiz)





let questions = [
    {
        q: "This is my question",
        a: ['choice 1', 'choice 2', 'choice 3'],
        correctA: 'choice 2'
    },
    {
        q: "This is my question",
        a: ['choice 1', 'choice 2', 'choice 3'],
        correctA: 'choice 2'
    },
    {
        q: "This is my question",
        a: ['choice 1', 'choice 2', 'choice 3'],
        correctA: 'choice 2'
    }
]








