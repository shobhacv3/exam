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
        q:'Which of the following statement is true with respective of temperature scale  ?',
        options:['A) 300K=27°C', 'B) 300°C=27K','C) 300°C=300K','D) 0°C = 0K'],
        answer:0
    },
    {
        q:'When a light ray travels from one medium to another medium of different refractive indices then its ___________ will vary',
        options:['A) Frequency,Velocity and wavelength', 'B) Wavelength and velocity', 'C) Frequency and velocity', 'D) Frequency and wavelength'],
        answer:1
    },
    {
        q:'Which of the following element has zero electron affinity?',
        options:['A) Flourine', 'B) Nitrogen', 'C) Neon', 'D) Oxygen'],
        answer:2
    },
    {
        q:'The Doctor will recommended for treatment of Myopia is __________',
        options:['A) concave lens', 'B) Convex lens', 'C) triangular prism', 'D) plane galss'],
        answer:1
    },
    {
        q:'The electric resistance of an open circuit is _________',
        options:['A) Finite' , 'B) Negative', 'C) Infinite', 'C) None'],
	 answer:2
    },
    {
        q:'The energy possessed by huge waves needed to generate electricity is',
        options:['A) Solar energy', 'B) Heat energy', 'C) Kinetic energy', 'D) Potentialenergy'],
        answer:3
    },
    {
        q:'The most common material used for making solar cell is?',
        options:['A) Bronze', 'B) Slicon', 'C) Aluminium', 'D) Magnalium'],
        answer:1
    },
    {
        q:'Coin placed in a bowl when seen from a place just disappears.When water is poured into a without disturbing the coin,the coin?',
        options:['A) Will not be seen', 'B) Appears above the water surface', 'C) Becomes visible again', 'D) Appears very much deep inside the water'],
        answer:2
    },
    {
        q:'An electron enters a magnetic feild at right angles to it.The direction of force acting on the electron will be',
        options:['A) To the right', 'B) To the Left', 'C) Into the page', 'D) Out of the page'],
        answer:2
    },
    {
        q:'Device used to test whether the current is flowing in a conductor or not is',
        options:['A) Ammeter', 'B) Voltmeter', 'C) Battery', 'D) Galvnometer'],
        answer:2
    },
     {
        q:'The magnetic field lines inside a solenoid is in the form',
        options:['A) Curved line', 'B) Parallel Straight lines', 'C) Circular lines', 'D) Zig-Zag lines'],
        answer:1
    },
     {
        q:'Electric fuse is connected with',
        options:['A) Parallel to the line wire', 'B) Live wire', 'C) Neutral wire', 'D) Earthing'],
        answer:0
    },
     {
        q:'In a volt meter there are 20 divisions between 0 to 0.5 the leat count of voltmeter is',
        options:['A) 0.0020', 'B) 0.050', 'C) 0.025', 'D) 0.250'],
        answer:2
    },
     {
        q:'The colour of the sky is blue during the day time and red during sunset and black at night due to:',
        options:['A) Scattering of light', 'B) Atmosphere refraction', 'C) Small particles present in the atmpsphere', 'D) All the above'],
        answer:3
    },
     {
        q:'A current is 0.5A is drawn by a filament of an elctric bulb for 10 minutes.The amount of elctric charge flowing through the bulb is',
        options:['A) 400C', 'B) 500C', 'C) 300C', 'D) 600C'],
        answer:2
    },
     {
        q:'SI unit of magnetic field strength is',
        options:['A) Orested', 'B) Volt', 'C) Ampered', 'D) Ohm'],
        answer:0
    },
     {
        q:'The energy from the hot water springs of the underground used to produce electrical energy that is Geo-thermal energy is operational in',
        options:['A) india', 'B) africa', 'C) new zealand', 'D) syria'],
        answer:2
    },
     {
        q:'Factors which decide whether the given fuel is a good fuel are',
        options:['A) Heat it releases on burning', 'B) Smoke produced by it on healing', 'C) Availabity of the fuel', 'D) All the above'],
        answer:3
    },
     {
        q:'which of the following property of proton will change while it moves freely in a magnetic field ',
        options:['A) Mass & Velocity', 'B) Velocity & Speed', 'C) Velocity & Momentum', 'D) Momentum & Speed'],
        answer:2
    },
     {
        q:'What is the ultimate source of energy?',
        options:['A) Sun', 'B) Uranium', 'C) Water', 'D) Fossil fuel'],
        answer:0
    }		
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
