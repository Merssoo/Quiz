var questions = [
  {
    question: "Em que ano surgiu o termo inteligência artificial?",
    choices: ["1980", "1950", "2000", "2015"],
    correctAnswer: 2
  },
  {
    question: "Qual foi a primeira inteligencia artificial criada?",
    choices: ["Logic Theorist", "Alexa", "Speeder", "The IA"],
    correctAnswer: 1
  },


  {
    question: "Qual foi a linguagem de programação usada na primeira IA",
    choices: ["Delphi", "Java", "C++", "Assembly"],
    correctAnswer: 4
  },
  
  {
    question: "Qual a linguagem de programção mais se assemlha com Assembly",
    choices: ["JavaScript", "Python", "C++", "Julia"],
    correctAnswer: 3
  },

  {
    question: "Qualquer um pode aprender a programas?",
    choices: ["Sim", "So quem sabe muita matematica", "Não", "Só quem tem vontade"],
    correctAnswer: 4
  },
  
  {
    question: "Quando se trata de desenvolvimento Web qual o framework mais popular?",
    choices: ["Javacript", "HTML", "CSS", "Django"],
    correctAnswer: 1
  },

];

var currentQuestion = 0;
var score = 0;
var playerName = "";

function startGame() {
  var nameInput = document.getElementById("name-input");
  playerName = nameInput.value;

  if (playerName.trim() !== "") {
    var nameContainer = document.getElementById("name-container");
    nameContainer.style.display = "none";

    var questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "block";

    displayQuestion();
  }
}

function displayQuestion() {
  var questionElement = document.getElementById("question");
  var choiceElements = document.querySelectorAll("#choices li span");

  questionElement.textContent = questions[currentQuestion].question;

  for (var i = 0; i < choiceElements.length; i++) {
    choiceElements[i].textContent = questions[currentQuestion].choices[i];
  }
}

function checkAnswer() {
  var choices = document.getElementsByName("choice");
  var selectedChoice;

  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      selectedChoice = choices[i].value;
      choices[i].checked = false;
      break;
    }
  }

  if (selectedChoice == questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    var questionContainer = document.getElementById("question-container")}};

    function checkAnswer() {
      var choices = document.getElementsByName("choice");
      var selectedChoice;
    
      for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
          selectedChoice = choices[i].value;
          choices[i].checked = false;
          break;
        }
      }
    
      if (selectedChoice == questions[currentQuestion].correctAnswer) {
        score++;
      }
    
      currentQuestion++;
    
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        var questionContainer = document.getElementById("question-container");
        questionContainer.style.display = "none";
    
        var resultElement = document.getElementById("result");
        resultElement.textContent = "Parabéns, " + playerName + "! Você acertou " + score + " de " + questions.length + " perguntas.";
        resultElement.style.display = "block";
      }
    }
    
