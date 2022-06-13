
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

var counter = 0 , score = 0, quesNum = 1;
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
var liCollection = document.getElementsByTagName('li');
var grade = document.getElementById('grade');



function setQuiz(){

    
    boxHide.style.display = 'none';
    quizBox.style.display = 'block';
        htmlQues.innerHTML = "Q"+ quesNum +" "+quizQuestion[counter].question;
        quesNum++;
        option1.innerHTML = quizQuestion[counter].options.a;
        option2.innerHTML = quizQuestion[counter].options.b;
        option3.innerHTML = quizQuestion[counter].options.c;
        option4.innerHTML = quizQuestion[counter].options.d;

}

function checkAns(e)
{
    nextQuestionBtn.style.display = 'block'
    // console.log(e)
    // console.log(quizQuestion[counter].answer)
    questionResult.style.display = 'block'


    for(var i = 0; i< liCollection.length; i++)
    {

        liCollection[i].setAttribute('class','disabled')
        // console.log(liCollection[i])
    }

    if(e.innerHTML ==  quizQuestion[counter].answer)
    {
        score += 10;

        questionResult.innerHTML = 'CORRECT';
        questionResult.style.color = 'green';
        showScore.innerHTML = score;
    }
    else{


        questionResult.innerHTML = 'WRONG ' +' (Correct is "'+quizQuestion[counter].answer+'")';
        questionResult.style.color = 'red';

            }
        
}

function showNextQues(){



    for(var i = 0; i< liCollection.length; i++)
    {

        liCollection[i].classList.remove('disabled');
                // console.log(liCollection[i])
    }



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
    
    
var percentage = (score/50)*100;
if(percentage >= 80 && percentage <=100)
{
    grade.innerHTML = 'Congrats Your Grade is  A+';
}
else if(percentage >= 70 && percentage <=80)
{

    grade.innerHTML = 'Congrats Your Grade is  A';

}

else if(percentage >= 60 && percentage <=70)
{

    grade.innerHTML = 'Your Grade is  B';

}

else if(percentage >= 50 && percentage <=60)
{

    grade.innerHTML = ' Your Grade is  C';

}
else {
    grade.innerHTML = ' Your Grade is  F';

}
console.log(percentage)


}