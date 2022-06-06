
var quizQuestion = [

    {
        num : 1,
        question : 'How do you round the number 7.25, to the nearest integer?',
        options :{

            a: 'Math.round(7.25)',
            b: 'rnd(7.25)',
            c: 'round(7.25)',
            d: 'Math.rnd(7.25)'
        } ,
        
        answer :  'Math.round(7.25)'
    },

    {

        num  : 2,

        question : "What will the following code return: Boolean(10 > 9)",
        options : {

            a :  "true",
            b :  "false",
            c :  "NaN", 
            d : "undefined"
        },

        answer : 'true'
    },

    {
        num : 3,
        question : "How do you find the number with the highest value of x and y?",

        options : {
            a : "Math.ceil(x, y)",
            b : "ceil(x, y)",
            c: "Math.max(x, y)",
            d: "none of them"

        },

        answer : "Math.max(x, y)" 

    },

    {
        num : 4,
        question : "Which operator is used to assign a value to a variable?",
        options : {

            a : "=",
            b: "-",
            c: "*",
            d : "/"


        },

        answer : "="
        
    },

    {
        num : 5,
        question : 'How do you write "Hello World" in an alert box?',
        options : {

            a  : 'msg("Hello World"); ',
            b : 'msgBox("Hello World");',
            c : 'alert("Hello World");',
            d : 'alertBox("Hello World");'
        },
        answer : 'alert("Hello World");'
    }



]





var counter = 0 , score = 0;
var boxHide = document.getElementById('boxHide');
var quizBox = document.getElementById('QuizBox');
var htmlQues = document.getElementById('htmlQues');
var nextQuestionBtn = document.getElementById('nextQuestionBtn');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var showScore = document.getElementById('showScore');
var answer = document.getElementsByName('answer');
var counterValue = document.getElementById('counterValue');
var questionResult = document.getElementById('questionResult');
var result = document.getElementById('result');
var totalMarks = document.getElementById('total-marks');

function setQuiz(){

    
    boxHide.style.display = 'none';
    quizBox.style.display = 'block';
        htmlQues.innerHTML = quizQuestion[counter].question;

        option1.innerHTML = quizQuestion[counter].options.a;
        option2.innerHTML = quizQuestion[counter].options.b;
        option3.innerHTML = quizQuestion[counter].options.c;
        option4.innerHTML = quizQuestion[counter].options.d;
       



   



}

function checkAns(e)
{
    nextQuestionBtn.style.display = 'block'
    console.log(e)
    console.log(quizQuestion[counter].answer)
    questionResult.style.display = 'block'



    if(e.innerHTML ==  quizQuestion[counter].answer)
    {
        score += 10;

        questionResult.innerHTML = 'CORRECT'
        showScore.innerHTML = score;
    }
    else{


        questionResult.innerHTML = 'WRONG ' +' (Correct is '+quizQuestion[counter].answer+')';

            }
var input = document.getElementsByTagName('input').disabled = true;
console.log(input)
            for(var i=0;i<input.length ; i++)
            {
                // console.log(input[i])
                // input.disabled = true
            }
        
}

function showNextQues(){


     for(var i = 0 ; i<answer.length; i++)
                  {
                              if(answer[i].checked)
                              {
                                     answer[i].checked = false;
                    
                         }
            
                   }
 
    nextQuestionBtn.style.display = 'none'
    questionResult.style.display = 'none'

    counter++;

    if(counter < quizQuestion.length)
    {
        counterValue.innerHTML = counter + 1 + " / " + quizQuestion.length;
        setQuiz();
    }

    else{

        quizBox.style.display= 'none';
        result.style.display = 'block';
        totalMarks.innerHTML = score + ' / ' + 50;
    }
    
    



}