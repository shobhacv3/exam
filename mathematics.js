const answersTrackerContainer = document.querySelector(".answers-tracker")
const options = document.querySelector(".options").children
const questionNumberSpan = document.querySelector(".question-num-value")
const question=document.querySelector(".question")
const totalQuestionsSpan =document.querySelector(".total-questions")
const correctAnswersSpan =document.querySelector(".correct-answers")
const totalQuestionsSpan2 =document.querySelector(".total-questions2")
const percentageSpan =document.querySelector(".percentage")
let currentIndex;
let index = 0;
let answeredQuestions =[]; // array of anwered question indexes
let score = 0;

const opt1 = document.querySelector(".option1")
const opt2 = document.querySelector(".option2")
const opt3 = document.querySelector(".option3")
const opt4 = document.querySelector(".option4")

const questions = [
    {
        q:'If x = -y and y > 0 , which of the following is wrong?',
        options:['A) x 2 > 0', 'B) x + y = 0', 'C) xy < 0', 'D) 1/x-1/y = 0'],
        answer:3
    },
{
        q:'Which of the following statement is true?',
        options:['A) x^2+5x-3 is a linear polynomial', 'B)x^2+4x-1 is a binomial', 'C) x+1 is a monomial', 'D) 5x^3 is a monomial'],
        answer:1
    },
    {
        q:'The pairs of equations x+2y-5=0 and -4x-8y+20=0 have:',
        options:['A) Unique solution','B) Exactly two solutions','C) Infinitely many solutions','D) No solution'],
        answer:2
    },
{
        q:'If the lines 3x+2ky–2=0 and 2x+5y+1=0 are parallel, then what is the value of k?',
        options:['A) 4/15','B) 15/4','C) 4/5','D) 5/4'],
        answer:1
    },
{
        q:'A fraction becomes 1/3 when 1 is subtracted from the numerator and it becomes 1/4 when 8 is added to its denominator. The fraction obtained is:',
        options:['A) 3/12', 'B) 4/12', 'C) 5/12', 'D) 7/12'],
        answer:2
    },
    {
        q:' Ritu can row downstream 20 km in 2 hours, and upstream 4 km in 2 hours. Her speed of rowing in still water and the speed of the current is:',
        options:['A) 6km/hr and 3km/hr',
		 'B) 7km/hr and 4km/hr',
		 'C) 6km/hr and 4km/hr',
		 'D) 10km/hr and 6km/hr'],
        answer:2
    },
    {
        q:'he first term and common difference for the A.P. 3,1,-1,-3 is:',
        options:['A) 3 and -2 ','B) -1 and 3','C) 1 and 3','D) 2 and 3'],
        answer:0
    },
 {
        q:'Which term of the A.P. 3, 8, 13, 18, … is 78?',
        options:['A)12th', 'B) 13th', 'C) 15th', 'D) 16th'],
        answer:3
    },
    {
        q:'(Sin 30°+cos 60°)-(sin 60° + cos 30°) is equal to:',
        options:['A) 0','B) 1+2√3','C) 1-√3','D) 1+√3'],
        answer:2
    },
    {
        q:'If cosX=2/3 then tan X is equal to:',
        options:[ 'A) 5/2','B) √(5/2)','C) √5/2','D) 2/√5'],
        answer:2
    },
    {
	q:'If ∆ABC is right angled at C, then the value of cos(A+B) is:', 
        options:[ 'A) 0','B) 1','C)  1/2','D)  √3/2'],
        answer:0
    },
 {
	q:'The angle of elevation of the top of a building from a point on the ground, which is 30 m away from the foot of the building, is 30°. The height of the building is:',
	options:['A) 10 m','B) 30/√3 m','C) √3/10 m','D) 30 m'], 
	answer:1   
     },
     {
         q:'If the height of the building and distance from the building foot’s to a point is increased by 20%, then the angle of elevation on the top of the building:',
	options:['A) Increases','B) Decreases','C) Do not change','D) None of the above'],
	answer:2
     },
{
	q:'The angle formed by the line of sight with the horizontal when the point being viewed is above the horizontal level is called:',
	options:['A) Angle of elevation','B) Angle of depression','C) No such angle is formed','D) None of the above'],
	answer:0
     },
     {
	q:'A ladder makes an angle of 60° with the ground, when placed along a wall. If the foot of ladder is 8 m away from the wall, the length of ladder is',
	options:['A) 4m ','B) 8m','C) 10m','D) 16m'],
	answer:3
      },
{
	q:'The abscissa of the point of intersection of the less than type and of the more than type cumulative frequency curves of a grouped data gives its',
	options:['A) mean','B) median','C) mode','D) All of the above'],
	answer:1
      },
{
	 q:' If P(E) = 0.07, then what is the probability of not E?',
	 options:['A) 0.93','B) 0.95','C) 0.89','D) 0.90'],
	 answer:0
      },
{
     	  q:'A bag has 3 red balls and 5 green balls. If we take a ball from the bag, then what is the probability of getting red balls only?',
	  options:['A) 3','B) 8','C) 3/8','D) 8/3'],
          answer:2
 	},
{
	    q:'A card is selected at random from a well shuffled deck of 52 playing cards. The probability of its being a face card is',
	    options:['A) 3/13','B) 4/13','C) 6/13','D) 9/13'],
	    answer:0
	},
{
	q:'If AM of a,a+3,a+6,a+9 and a+12 is 10, then a is equal to:',
	options:['A) 1','B) 2','C) 3','D) 4'],
	answer:3
      },

]

totalQuestionsSpan.innerHTML = questions.length

function load(){
    questionNumberSpan.innerHTML = index + 1
    question.innerHTML = questions[currentIndex].q;
    opt1.innerHTML = questions[currentIndex].options[0]    
    opt2.innerHTML = questions[currentIndex].options[1]
    opt3.innerHTML = questions[currentIndex].options[2]
    opt4.innerHTML = questions[currentIndex].options[3]
    index++
}

//Check if selected answer is correct or wrong
function check(element){
    if(element.id == questions[currentIndex].answer){
        element.className="correct"
        updateAnswersTracker("correct")
        score++
    }
    else {
        element.className="wrong"
        updateAnswersTracker("wrong")
    }
    disableClick();
}

//Make sure the user selected an item before clicking on the Next button
function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select an option")
    }
    else{
        randomQuestion();
        enableClick();
    }
}

//Listener function for click event on Next button
function next(){
    validate();
}

//Function to disable click for the options
function disableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add("disabled")

        if(options[i].id == questions[currentIndex].answer){
            options[i].classList.add('correct');
        }
    }
}

//Function to reanable click in the options
function enableClick(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong")

    }
}

//Function to select a random question
function randomQuestion(){
    let randomNumber = Math.floor(Math.random()*questions.length);
    if(index == questions.length){
        quizOver();
    }
    else{
        if(answeredQuestions.length > 0){
            if(answeredQuestions.includes(randomNumber)){
                randomQuestion();
            }
            else {
                currentIndex = randomNumber;
                load();
            }
        }
        if(answeredQuestions.length == 0){
            currentIndex = randomNumber
            load()
        }
        //add the question to list of anwered questions
        answeredQuestions.push(randomNumber)
    }
}

//Restart the quiz
window.onload=function(){
    this.randomQuestion();
    this.answersTracker();
}

//Set up answers tracker elements
function answersTracker(){
    for(let i=0; i< questions.length; i++){
        const div =document.createElement("div")
        answersTrackerContainer.appendChild(div);
    }
}

//Update the answers tracker elements
function updateAnswersTracker(newClass){
    answersTrackerContainer.children[index -1].classList.add(newClass)
}

//Displays the quiz-over page if quiz is over
function quizOver(){
    document.querySelector(".quiz-over").classList.add("show")
    correctAnswersSpan.innerHTML = score;
    totalQuestionsSpan2.innerHTML = questions.length
    percentageSpan.innerHTML=Math.round((score/questions.length)*100) + "%"
}

function tryAgain(){
    window.location.reload();
}
