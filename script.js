function randomArray(array){
    return(
        array.sort(()=>0.5-Math.random())
    )

}
let questions = [
    {
        id: 1,
        title: "What is the largest animal in the world?",
        a: "Blue whale",
        b: "Giraffe",
        c: "Elephant",
        d: "Hippopotamus",
        current: "a"
    },
    {
        id: 2,
        title: "What is the highest waterfall in the world?",
        a: "Angel Falls",
        b: "Niagara Falls",
        c: "Victoria Falls",
        d: "Iguazu Falls",
        current: "a"
    },
    {
        id: 3,
        title: "What is the currency of Japan?",
        a: "Yen",
        b: "Dollar",
        c: "Euro",
        d: "Pound",
        current: "a"
    },
    {
        id: 4,
        title: "Who painted the famous artwork 'The Mona Lisa'?",
        a: "Leonardo da Vinci",
        b: "Vincent van Gogh",
        c: "Pablo Picasso",
        d: "Claude Monet",
        current: "a"
    },
    {
        id: 5,
        title: "What is the largest country in South America?",
        a: "Brazil",
        b: "Argentina",
        c: "Peru",
        d: "Colombia",
        current: "a"
    },
    {
        id: 6,
        title: "What is the longest river in Africa?",
        a: "Congo River",
        b: "Niger River",
        c: "Nile River",
        d: "Zambezi River",
        current: "c"
    },
    {
        id: 7,
        title: "What is the name of the world's largest desert?",
        a: "Sahara Desert",
        b: "Arabian Desert",
        c: "Gobi Desert",
        d: "Mojave Desert",
        current: "a"
    },
    {
        id: 8,
        title: "What is the name of the smallest ocean in the world?",
        a: "Arctic Ocean",
        b: "Indian Ocean",
        c: "Atlantic Ocean",
        d: "Southern Ocean",
        current: "d"
    },
    {
        id: 9,
        title: "What is the chemical symbol for gold?",
        a: "Ag",
        b: "Au",
        c: "Fe",
        d: "Cu",
        current: "b"
    },
    {
        id: 10,
        title: "What is the highest mountain in North America?",
        a: "Mt. Everest",
        b: "Mt. Kilimanjaro",
        c: "Mt. McKinley",
        d: "Mt. Fuji",
        current: "c"
    },
    {
        id: 11,
        title: "What is the name of the dog in the Peanuts comic strip?",
        a: "Snoopy",
        b: "Scooby Doo",
        c: "Goofy",
        d: "Pluto",
        current: "a"
    },
    {
        id: 12,
        title: "What is the name of the first man to walk on the moon?",
        a: "Neil Armstrong",
        b: "Buzz Aldrin",
        c: "Michael Collins",
        d: "Yuri Gagarin",
        current: "a"
    },
    {
        id: 13,
        title: "What is the name of the first woman to win a Nobel Prize?",
        a: "Marie Curie",
        b: "Rosalind Franklin",
        c: "Dorothy Hodgkin",
        d: "Barbara McClintock",
        current: "a"
    },
    {
        id: 14,
        title: "What is the largest continent in the world?",
        a: "Asia",
        b: "Africa",
        c: "North America",
        d: "Antarctica",
        current: "a"
    },
    {
        id: 15,
        title: "What is the name of the largest moon of Saturn?",
        a: "Mimas",
        b: "Titan",
        c: "Enceladus",
        d: "Iapetus",
        current: "b"
    },
    {
        id: 16,
        title: "What is the capital of Australia?",
        a: "Melbourne",
        b: "Sydney",
        c: "Brisbane",
        d: "Canberra",
        current: "d"
    },
    {
        id: 17,
        title: "What is the smallest country in the world?",
        a: "Vatican City",
        b: "Monaco",
        c: "Nauru",
        d: "San Marino",
        current: "a"
    },
    {
        id: 18,
        title: "What is the name of the first computer programmer?",
        a: "Ada Lovelace",
        b: "Grace Hopper",
        c: "Katherine Johnson",
        d: "Margaret Hamilton",
        current: "a"
    },
    {
        id: 19,
        title: "What is the name of the famous physicist who developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Stephen Hawking",
        d: "Richard Feynman",
        current: "b"
    },
    {
        id: 20,
        title: "What is the name of the founder of Apple Inc.?",
        a: "Steve Jobs",
        b: "Bill Gates",
        c: "Mark Zuckerberg",
        d: "Elon Musk",
        current: "a"
    },
    {
        id: 21,
        title: "What is the name of the largest organ in the human body?",
        a: "Heart",
        b: "Liver",
        c: "Brain",
        d: "Skin",
        current: "d"
    },
    {
        id: 22,
        title: "What is the name of the world's largest coral reef system?",
        a: "Great Barrier Reef",
        b: "Belize Barrier Reef",
        c: "Andros Barrier Reef",
        d: "Mesoamerican Barrier Reef",
        current: "a"
    },
    {
        id: 23,
        title: "What is the name of the famous detective created by Sir Arthur Conan Doyle?",
        a: "Sherlock Holmes",
        b: "Hercule Poirot",
        c: "Miss Marple",
        d: "Sam Spade",
        current: "a"
    },
    {
        id: 24,
        title: "What is the name of the capital of Brazil?",
        a: "São Paulo",
        b: "Rio de Janeiro",
        c: "Brasília",
        d: "Salvador",
        current: "c"
    }

]
let questionConfig={
    i:0,
    quiz__answers:document.querySelector('.quiz__answers'),
    quiz__question:document.querySelector('.quiz__question'),
    popup__button:document.querySelector('.popup__button'),
    refresh__button:document.querySelector('.refresh__button'),
    popup__progress_item:document.querySelectorAll('.popup__progress-item'),
    result:{
        success:0,
        worning:0
    }
}

questions= randomArray(questions)
function  startQuestion(){

    questionConfig.popup__button.classList.add('d-none')
    questionConfig.quiz__answers.innerHTML=''
    if(questionConfig.i===4){
        questionConfig.quiz__answers.innerHTML=`
            <label class="container">success:${questionConfig.result.success}</label>
            <label class="container">worning:${questionConfig.result.worning}</label>
`
        questionConfig.refresh__button.classList.remove('d-none')

        return;
    }
    questionConfig.popup__progress_item[questionConfig.i].classList.add('popup__progress-item_active')
    if(questionConfig.i>0){
        questionConfig.popup__progress_item[questionConfig.i-1].classList.remove('popup__progress-item_active')

    }
    let q=questions[questionConfig.i]
    questionConfig.quiz__question.innerHTML=q.title
    let array=['a','b','c','d']
    array.forEach(res=>{
        questionConfig.quiz__answers.innerHTML+=`
        <label class="container">${q[res]}
                    <input type="radio" name="answers" value="${res}" class="quiz__input">
                    <span class="checkmark"></span>
                </label>
        `
    })

    questionConfig.quiz__input=document.querySelectorAll('.quiz__input')
    answerfunc()

}
function answerfunc(){
    questionConfig.quiz__input.forEach(tag=>{
        tag.addEventListener('change',function (e){
            questionConfig.popup__button.classList.remove('d-none')
            questionConfig.selectAnswer=e.target.value

        })
    })

}

    questionConfig.popup__button.addEventListener('click',function (){

        if(questions[questionConfig.i].current===questionConfig.selectAnswer){
            console.log('ok success')
            questionConfig.result.success++

        }else{
            console.log('worning')
            questionConfig.result.worning++
        }
        questionConfig.i++
        startQuestion()
    })
questionConfig.refresh__button.addEventListener('click',function (){
    questionConfig.popup__progress_item[questionConfig.i-1].classList.remove('popup__progress-item_active')

    questionConfig.refresh__button.classList.add('d-none')
    questions= randomArray(questions)
questionConfig.result.success=0
questionConfig.result.worning=0
    questionConfig.i=0
    startQuestion()
})