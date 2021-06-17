// this function will load as the browser load
window.onload = function () {
    show(0);

}
// Questions
let questions = [
    {
        id: 1,
        question: "Which of the following name is correct",
        answer: "Asychron",
        options: [
            "Asychron",
            "Acychron",
            "Asychorn",
            "Acychorn"
        ]


    },
    {
        id: 2,
        question: "Asychron workng in the industry for past ___ years",
        answer: "7",
        options: [
            "1",
            "2",
            "5",
            "7"
        ]

    },

    {
        id: 3,
        question: "Asychron have delivered the most ___ and ___ applications",
        answer: "Complex ,Enterprise",
        options: [
            "Versatile,Cool",
            "Simple,Easy",
            "Complex ,Enterprise",
            "None Of Above"
        ]

    },
    {
        id: 4,
        question: "Asychron helps their clients to get their ideas in",
        answer: "reality",
        options: [
            "dreams",
            "reality",
            "vision",
            "demand"
        ]

    },
    {
        id: 5,
        question: "Asychron conducting an free ___ Program",
        answer: "internship",
        options: [
            "dance",
            "singing",
            "cultural",
            "internship"
        ]

    },
    {
        id: 6,
        question: "Duration of internship is",
        answer: "6 months",
        options: [
            "1 months",
            "4 months",
            "8 months",
            "6 months"
        ]

    },
    {
        id: 7,
        question: "This internship is",
        answer: "free for selected candidates",
        options: [
            "free for all",
            "free for selected candidate",
            "paid for everyone",
            "None of above"
        ]

    },
    {
        id: 8,
        question: "you will get chance to work on ",
        answer: "real-time projects",
        options: [
            "no projects",
            "basic projects",
            "real-time projects",
            "your own project"
        ]

    },
    {
        id: 9,
        question: "Internship letter will be provided on completion of __ months of an internship",
        answer: "6",
        options: [
            "1",
            "6",
            "5",
            "7"
        ]

    },
    {
        id: 10,
        question: "Free training on ",
        answer: "MongoDB,React..",
        options: [
            "Java",
            "MongoDB,React..",
            "Python",
            "App Development"
        ]

    },

]



// calling function and handling default event
function submitForm(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;

    // storing name in session storage
    sessionStorage.setItem("name", name);

    //switching to next page
    location.href = "Quiz.html";
    console.log(name);


}
// global variables
let point = 0;
let question_count = 0;

function next() {

    // taking that classes in User_answer having "active" class present in li.option  
    let user_answer = document.querySelector("li.Option.active").innerHTML;

    // validating answer and storing correct ans in session storage and inc point.
    if (user_answer == questions[question_count].answer) {
        point += 1;
        sessionStorage.setItem("Points", point);
    }

    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
        location.href = "result.html";
        return;

    }


    question_count++;
    show(question_count);


}

// function to show questions
function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = `<h2>Q${question_count + 1}.${questions[count].question}</h2>
    <ul class="Option_Group">
 <li class="Option">${questions[count].options[0]}</li>
 <li class="Option">${questions[count].options[1]}</li>
 <li class="Option">${questions[count].options[2]}</li>
<li class="Option">${questions[count].options[3]}</li>
</ul> 
 `;

    toggleActive();

}
//  making function that adds active 
//  class to the valid option and handling multiple clicks also.
function toggleActive() {
    let option = document.querySelectorAll("li.Option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }


            }
            option[i].classList.add("active");
        }

    }
}