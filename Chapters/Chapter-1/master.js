//LOAD JSON DATA
openBook();

function openBook() {
    startTransition();
}

function startTransition() {
    document.querySelector(".chapter-index").classList.add("start-transition");
    setTimeout(getData, 1000);
}


function getData() {
    fetch("https://humandilemmas.com/wpfolder/wp-json/wp/v2/question?per_page=11")
        .then(response => response.json())
        .then(showPosts);
}

function showPosts(posts) {
    createQuestion(posts)
}

// CREATE QUESTION
//QUESTION COUNTER
questionCounter = 10
main = document.querySelector(".dataMain")

function createQuestion(posts) {

    questionTemplate = document.querySelector("#question-template").content;
    questionCopy = questionTemplate.cloneNode(true);

    console.log(questionCopy);
    console.log(posts);

    questionText = posts[questionCounter].question_text;
    answerOne = posts[questionCounter].first_answer;
    answerTwo = posts[questionCounter].second_answer;

    questionCopy.querySelector(".dataQuestion").textContent = questionText;
    questionCopy.querySelector(".dataAnswerOne").textContent = answerOne;
    questionCopy.querySelector(".dataAnswerTwo").textContent = answerTwo;
    main.classList.add("question-wrapper")
    main.classList.remove("chapter-index")
    main.classList.remove("answer-wrapper")
    main.textContent = ""
    main.appendChild(questionCopy);

    //EVENTLISTENERS TO BUTTONS
    const buttonOne = document.querySelector(".dataAnswerOne")
    const buttonTwo = document.querySelector(".dataAnswerTwo")
    const buttonThree = document.querySelector(".dataAnswerThree")
    const buttonFour = document.querySelector(".dataAnswerFour")

    buttonOne.addEventListener("click", showResults)
    buttonTwo.addEventListener("click", showResults)
    buttonThree.addEventListener("click", showResults)
    buttonFour.addEventListener("click", showResults)

    //ANSWER PAGE JS

    function showResults() {
        answerTemplate = document.querySelector("#answer-template").content;
        answerCopy = answerTemplate.cloneNode(true);
        console.log(answerCopy)

        answerCopy.querySelector(".dataQuestion").textContent = questionText;
        answerCopy.querySelector(".dataAnswerOne").textContent = answerOne;
        answerCopy.querySelector(".dataAnswerTwo").textContent = answerTwo;

        main.classList.remove("question-wrapper")
    main.classList.add("answer-wrapper")
        main.textContent = ""
        main.appendChild(answerCopy);



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
        questionCounter--

    }

    document.addEventListener('click', function (event) {
	if (!event.target.closest('.rightArrow')) return;
	getData();
}, false)

}
