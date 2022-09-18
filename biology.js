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
        q:'In Photosyntesis process,atmosphere carbon dioxide is __________ to carbohydrates',
        options:['A) Oxidised', 'B) Reduced ','C) Neutralised','D) Burnt'],
        answer:1
    },
    {
        q:'The enzyme pepsin is inactive in stomach without the presence of',
        options:['A) Nitric Acid', 'B) Acetic Acid', 'C) Hydrochloric Acid', 'D) Butyric acid'],
        answer:2
    },
{
        q:'Rajiv was absent in the class because of muscle pain which he claims to be due to excess physical excercise he had done yesterday.This pain is due to', 
        options:['A) Formation of lactic acid', 'B) Formation of acetic acid', 'C) Formation of pyruvic acid', 'D) Formation of Hydrochloric acid'],
        answer:0
    },
{
        q:'Gustatory receptors will detect _________',
        options:['A) light', 'B) taste', 'C) smell', 'D) touch'],
        answer:1
    },
    {
        q:'A potted plant kept in a room tends to bend towards the direction of light.The movement is called',
        options:['A) Photographism' , 'B) Photonastism', 'C) Photoperiodism', 'D) Phototropism '],
	 answer:3
    },
    {
        q:'The upward or downward movement of shoot and root respectively is influenced by gravity.Such movement is called',
        options:['A) Gravity movement', 'B) Gravitytropism', 'C) Geotropism', 'D) Gravitism'],
        answer:2
    },
	{
        q:'An animal which can reproduce by budding is',
        options:['A) Bryophyllym', 'B) Yeast', 'C) Hydra', 'D) All the above'],
        answer:2
    },
{
        q:'Pre-natal sex determination has been prohibited by law due to',
        options:['A) High cost charged by doctors', 'B) Possible danger of mothers health', 'C) Increasing cases of male foeticide', 'D) Increasing cases of female foeticide'],
        answer:3
    },
{
        q:'Eggs starts developing in human female',
        options:['A) When she is in her mothers womb', 'B) Only after birth', 'C) After the first mensuration','D) When she attains puberty'],
        answer:0
    },
    {
        q:'The F2 phenotype ratio of a monohybrid cross by Mendel is',
        options:['A) 1:1', 'B) 2:1', 'C) 3:1', 'D) 4:!'],
        answer:2
    },
     {
        q:'If a human a sperm(22+Y) fertilizes an egg(22+X),the sex of the foetus shall be',
        options:['A) Male', 'B) Female', 'C) Either male or female', 'D) Both'],
        answer:0
    },
     {
        q:'The number of autosomes in a human body cell is',
        options:['A) 46', 'B) 44', 'C) 22', 'D) 23'],
        answer:1
    },
     {
        q:'World Environment day is celebrated on',
        options:['A) July 1', 'B) July 5', 'C) June 1', 'D) June 5'],
        answer:3
    },
     {
        q:'How life might have originated on earth was experimentally shown by',
        options:['A) Urey and Miller', 'B) Oparin and Haldane', 'C) Watson and Crick', 'D) None of the above'],
        answer:0
    },
     {
        q:'Accumulation of non-biodegradable pesticides in different trophic level is called',
        options:['A) Biological degradation', 'B)  Biological magnification', 'C)  Biological concentration', 'D)  Biological deposition'],
        answer:1
    },
     {
        q:'Which of the following is a non-biodegradable substance',
        options:['A) DDT', 'B) Manure', 'C) Paper', 'D) Cotton cloth'],
        answer:0
    },
     {
        q:'Chipko Andolan is associated with',
        options:['A) Protesting against pasting of posters on wall', 'B) Saving money', 'C) Saving forest', 'D) Using more postal stamps'],
        answer:2
    },
     {
        q:'Amrita Bishnoi lost her life while saving forest having ________ trees',
        options:['A) teak', 'B) khejri', 'C) bamboo', 'D) segun'],
        answer:1
    },
     {
        q:'In a terrestrial ecosystem the biomass of _________ should be the most ',
        options:['A) Herbivore', 'B) Carnivore', 'C) Producer', 'D) Anyone of the above'],
        answer:2
    },
     {
        q:'The UV radiation from the sun is likely to cause _________ in human',
        options:['A) Skin Cancer', 'B) Lung Cancer', 'C) Liver Cancer', 'D) Brain Cancer'],
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
