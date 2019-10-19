window.onload = fadeIn()
body = document.querySelector("body")
title = document.querySelector("title")

// PAGE CONTENT

const page1 = '<header>Chapter 1. Think </header> <div class="wrapper"> <h1 class="question">You are forced to cut off one of these two limbs to survive.<br>Which do you choose to cut off first?</h1> <div class="left_arrow"> <svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"> <g> <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /> </g> </svg> </div><div class="right_arrow"> <svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"> <g> <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /> </g> </svg> </div> <div class="nested"> <button class="buttons button">A leg</button> <button class="buttons button2">An arm</button> <button class="buttons button3">Dont know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

// ANIMATION OF INDEX PAGE AS WELL AS AUTOMATIC LOAD OF PAGE 1
function fadeIn(){
    text = document.querySelector("main");
    text.classList.add("fadein")
    setTimeout(loadpage1,4000)
}

function loadpage1(){
    title.textContent = "Human Dilemmas Page 1"
    body.innerHTML = page1
}