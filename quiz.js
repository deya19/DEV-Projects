const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];



const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0;
let correctCount = 0;
let wroungCount = 0;
let total = 0;
let selectedAnswer;





const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`
  resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wroungCount}`
  resultScreen.querySelector(".score").textContent = `Score: ${(correctCount-wroungCount) *10}`
}



// for determin what is the true answer or false
const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach(el => 
    el.addEventListener("click",(e) => {
      selectedAnswer = e.target.value;
    }))
}


// for show the question and answer and show between it
const showQuestion = (qNumber) =>{
  if (qIndex === data.length) return showResult();
  selectedAnswer = null
  question.textContent = data[qNumber].question
  answersContainer.innerHTML =  data[qNumber].answers.map((item,index)=>
    `  <article class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
       </article>
  `
  ).join("");

  selectAnswer()

};


// to turn on to another question and determine the number of true or false quetion 
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ :  wroungCount++
      qIndex++
      showQuestion(qIndex)
    }else alert("Select an answer!")
  })
 }



 // to restart game from the first
 const playAgain = () => {
   qIndex = 0;
   correctCount = 0;
   wroungCount = 0;
   total = 0;
  showQuestion(qIndex)
}


play.addEventListener("click" , () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
})




showQuestion(qIndex);
submitAnswer();
