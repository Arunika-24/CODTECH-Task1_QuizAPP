const quizData = [
{
question:"What does HTML stand for?",
options:["Hyper Text Markup Language","Programming Language","Database","None"],
answer:"Hyper Text Markup Language"
},
{
question:"What does CSS stand for?",
options:["Cascading Style Sheets","Color Style Sheet","Computer Style Sheet","None"],
answer:"Cascading Style Sheets"
}
];

let current=0;
let score=0;

function loadQuestion(){
const q=quizData[current];
document.getElementById("question").innerText=q.question;

let optionsHTML="";

q.options.forEach(option=>{
optionsHTML+=`
<button onclick="checkAnswer('${option}')">${option}</button><br><br>
`;
});

document.getElementById("options").innerHTML=optionsHTML;
}

function checkAnswer(selected){
if(selected===quizData[current].answer){
score++;
alert("Correct!");
}
else{
alert("Wrong!");
}
}

function nextQuestion(){
current++;

if(current<quizData.length){
loadQuestion();
}
else{
document.getElementById("quiz").style.display="none";
document.getElementById("score").innerText=
`Your Score: ${score}/${quizData.length}`;
}
}

loadQuestion();
