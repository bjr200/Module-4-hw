// Quiz questions
var questions = [
    {
      question: "What is the correct syntax for creating a new JavaScript array?",
      choices: ["var array = [];", "var array = new Array();", "var array = {};", "var array = Array();"],
      answer: "var array = [];"
    },
    {
      question: "What is the output of the following code?\nconsole.log(typeof(null));",
      choices: ["object", "null", "undefined", "string"],
      answer: "object"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      choices: ["string", "boolean", "number", "function"],
      answer: "function"
    }
    // Add more questions here...
  ];
  
  var currentQuestionIndex = 0;
  var score = 0;
  var timeLeft = 60;
  var timer;
  
  var startBtn = document.getElementById("start-btn");
  var quizContainer = document.getElementById("quiz-container");
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");
  var endContainer = document.getElementById("end-container");
  var scoreElement = document.getElementById("score");
  var initialsElement = document.getElementById("initials");
  var submitBtn = document.getElementById("submit-btn");
  
  startBtn.addEventListener("click", startQuiz);
  submitBtn.addEventListener("click", saveScore);
  
  function startQuiz() {
    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    timer = setInterval(updateTime, 1000);
    showQuestion();
  }
  
  function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
  
    for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choice = currentQuestion.choices[i];
      var li = document.createElement("li");
      li.textContent = choice;
      li.setAttribute("data-index", i);
      li.addEventListener("click", checkAnswer);
      choicesElement.appendChild(li);
    }
  }
  
  function checkAnswer(event) {
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.textContent;
    var correctAnswer = questions[currentQuestionIndex].answer;
  
    if (selectedAnswer === correctAnswer) {
      score++;
    } else {
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex === questions.length || timeLeft === 0) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  function updateTime() {
    timeLeft--;
    if (timeLeft <= 0) {
      timeLeft = 0;
      endQuiz();
    }
  }
  
  function endQuiz() {
    clearInterval(timer);
    quizContainer.style.display = "none";
    endContainer.style.display = "block";
    scoreElement.textContent = score;
  }
  
  function saveScore() {
    var initials = initialsElement.value;
    // Implement the logic to save the score and initials here
    // For example, you can store them in localStorage or send them to a server
  }
  