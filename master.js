//LOAD JSON DATA

window.onload = openBook();

function openBook(){
    startTransition();
}

function startTransition(){
    document.querySelector(".chapter-index").classList.add("start-transition");
    setTimeout(getData, 3000);
}


function getData() {
    fetch("http://humandilemmas.com/wpfolder/wp-json/wp/v2/question?per_page=11")
        .then(response => response.json())
        .then(showPosts);
}

function showPosts(posts) {
    createQuestion(posts)
}

// CREATE QUESTION
  //QUESTION COUNTER
questionCounter = 10
function createQuestion(posts) {
    main = document.querySelector(".dataMain")
    questionTemplate = document.querySelector("#question-template").content;
    questionCopy = questionTemplate.cloneNode(true);

    console.log(questionCopy);
    console.log(posts);

    questionCopy.querySelector(".dataQuestion").textContent = posts[questionCounter].question_text;
    questionCopy.querySelector(".dataAnswerOne").textContent = posts[questionCounter].first_answer;
    questionCopy.querySelector(".dataAnswerTwo").textContent = posts[questionCounter].second_answer;

    questionCounter --;
    main.classList.add("question-wrapper")
    main.classList.remove("chapter-index")
    main.textContent = ""
    main.appendChild(questionCopy);
}

//ANSWER PAGE JS
function showResults() {
    const box1 = document.getElementById("box1");
    const perBox1 = document.querySelector(".answerbox1")
    const box2 = document.getElementById("box2");
    const perBox2 = document.querySelector(".answerbox2")
    const box3 = document.getElementById("box3");
    const perBox3 = document.querySelector(".answerbox3")
    const box4 = document.getElementById("box4");
    const perBox4 = document.querySelector(".answerbox4")

    const results = document.querySelector(".results").clientWidth;

    setInterval(function () {
        perBox1.textContent = Math.ceil(box1.clientWidth / results * 100) + "%";
        perBox2.textContent = Math.ceil(box2.clientWidth / results * 100) + "%";
        perBox3.textContent = Math.ceil(box3.clientWidth / results * 100) + "%";
        perBox4.textContent = Math.ceil(box4.clientWidth / results * 100) + "%";
    }, 10)
}
