function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
    const question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

const q1 = new Question("what s the best programming language?",["python","javascript","c#","java"],"javascript");
const q2 = new Question("what s the most popular programming language ?",["visual basic","nodejs","angularjs","javascript"],"javascript");
const q3 = new Question("what s the best modern programming language",["asp.net","c++","javascript","flutter"],"javascript");
const q4 = new Question("what s the worst programming language",["python","c","javascript","reactjs"],"c");

const questions = [q1,q2,q3,q4];


const quiz = new Quiz(questions);

loadQuestion();


function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{

        const question = quiz.getQuestion();
        const choices = question.choices;
        
        document.querySelector('#question').textContent = question.text;

        for(var i=0; i<choices.length;i++){
            let element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
            guess('btn'+i,choices[i]);
        }

        showProgress();
    }
}


function guess(id,guess){
    const btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore(){
   let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
   document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    const totalQuestion = quiz.questions.length;
    const questionNumber = quiz.questionIndex + 1;
    let html = 'Question '+ questionNumber + ' of ' + totalQuestion;

    if(totalQuestion === questionNumber){
        document.querySelector('#progress').innerHTML = "Quiz is Ended";
    }else{
        document.querySelector('#progress').innerHTML = html;
    }
}