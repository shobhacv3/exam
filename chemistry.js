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
        q:'Which of the following is not characteristic of solid ?',
        options:['A) High Rigidity', 'B) Regular Shape','C) High Density','D) High compressibility'],
        answer:3
    },
    {
        q:'The conversation of solid to gas directly called is called',
        options:['A) Evaporation', 'B) Sublimation', 'C) Distilation', 'D) Condensation'],
        answer:1
    },
    {
        q:'Wet clothes are kept for drying.Which of the following does not help them in drying?',
        options:['A)Cooling the room', 'B) Spreading it out', 'C) Blowing wind oover it', 'D)Cooling the room'],
        answer:0
    },
    {
        q:'We get the smell of hot food in the kitchen outside the house because of:',
        options:['A) Boiling', 'B) Evaporation', 'C) Freezing', 'D) Diffusion'],
        answer:3
    },
    {
        q:'When a bottle of soda water is opened,carbon dioxide escapes,producing a fizz.This is due to:',
        options:['A) Decrease in solubility on decreasing temperature' ,
		 'B) Decrease in solubility on increasing temperature', 
		 'C) Decrease in solubility on decreasing pressure', 
		 'D) Decrease in solubility on increasing pressure'],
	 answer:2
    },
    {
        q:'The sequenve of steps for separating a mixture of salt,sand and camphor is:',
        options:['A) Adding water,filtration,evaporation,sublimation',
		 'B) Adding water,filtration,sublimation,evaporation', 
		 'C) Sublimation,Adding water,filtration,evaporation', 
		 'D) Sublimation,Adding water,evaporation,filtration'],
        answer:2
    },
    {
        q:'Which of the following is a correct stataement:',
        options:['A) Na2S is sodium sulphide,Na2SO3 is sodium sulphite,Na2SO4 is sodium sulphate', 			 'B) Na2S is sodium sulphite,Na2SO3 is sodium sulphide,Na2SO4 is sodium sulphate', 			 'C) Na2S is sodium sulphide,Na2SO3 is sodium sulphate,Na2SO4 is sodium sulphite', 			 'D) Na2S is sodium sulphite,Na2SO3 is sodium sulphite,Na2SO4 is sodium sulphide'],
        answer:0
    },
    {
        q:'The chemical formula of lead sulphate is',
        options:['A) Pb(SO4)2', 
		 'B) PbSO4', 
		 'C) Pb2SO4', 
		 'D) Pb2(SO4)3'],
        answer:1
    },
    {
        q:'Which information is not conveyed by a balanced chemical equation?',
        options:['A) Physical states of reactants and products',
	 	 'B) Symbols and formulae of all the substances involved in a particular reaction',
	         'C) Number of atoms/molecules of the reactants and products formed',
	         'D)  Whether a particular reaction is actually feasible or not'],
        answer:3
    },
    {
        q:'The reaction in which two compound exchange their ions to form two new compounds is called',
        options:['A) displacement reaction', 
		 'B) combination reaction',
		 'C) double displacement reaction',
		 'D) redox reaction'],
        answer:2
    },
     {
        q:'An element X on exposure to moist air turns reddish-brown and a new compound Y is formed. The substance X and Y are',
        options:['A) X=Fe,Y=Fe2O3', 'B) X=Ag,Y=Ag2S', 'C) X=Cu,Y=CuO', 'D) X=Al,Y=Al2O3'],
        answer:0
    },
     {
        q:'14 elements after actinium is called',
        options:['A) Lanthanides','B) Actinides','C) D-block elements','D) P block elements'],
        answer:1
    },
     {
        q:'Which is not true about the noble gases?',
        options:['A) They are non metallic in nature ', 
		 'B) They exist in atomic form', 
		 'C) They are radioactive in nature', 
		 'D) Xenon is the most reactive among these'],
        answer:2
    },
     {
        q:'  An element with atomic number will form a basic oxide________',
        options:['A) 7', 'B) 17', 'C) 14', 'D)11'],
        answer:3
    },
     {
        q:'dentify the wrong sequence of the elements in a group',
        options:['A) Ca,Br,Ba', 'B) Cu,Au,Ag', 'C)  N,P,As', 'D) Cl,Br,I'],
        answer:1
    },
     {
        q:'SI unit of magnetic field strength is',
        options:['A) Orested', 'B) Volt', 'C) Ampered', 'D) Ohm'],
        answer:0
    },
     {
        q:'The isomeric pair is',
        options:['A) ethane and propane', 'B)  propane and butane', 'C) ethane and ethane', 'D) butane and 2-methyl propane'],
        answer:3
    },
     {
        q:'The substnace not responsible for the hardness of water is',
        options:['A) Sodium nitrate','B) calcium hydrogen carbonate','C) calcium carbonate','D) magnesium carbonate'],
        answer:0
    },
     {
        q:' Soaps are formed by saponification of ',
        options:['A) alcohols','B) glycosides','C) simple esters','D) carboxylic acids'],
        answer:2
    },
     {
        q:'A student placed an iron nail in copper sulphate solution. He observed the reddish brown coating on the iron nail which is',
        options:['A) soft and dull','B) hard and flading','C) smooth and shining','D) rough and granular'],
        answer:3
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
