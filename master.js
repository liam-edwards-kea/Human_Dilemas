window.onload = test()

function test() {
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
