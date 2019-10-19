window.onload = fadeIn()
body = document.querySelector("body")
title = document.querySelector("title")

// PAGE CONTENT

const page1 = '<header>Chapter 1. Think </header> <div class="wrapper"> <h1 class="question">You are forced to cut off one of these two limbs to survive.<br>Which do you choose to cut off first?</h1> <div class="left_arrow"> <svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"> <g> <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /> </g> </svg> </div><div class="right_arrow"> <svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"> <g> <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /> </g> </svg> </div> <div class="nested"> <button class="buttons button">A leg</button> <button class="buttons button2">An arm</button> <button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'
// PAGE 2
const page2 = '<header>Chapter 1. Think</header><div class="wrapper2"><h2 class="question">You are forced to cut off one of these two limbs to survive.<br>Which do you choose to cut off first?</h2><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="results"><div class="box1"></div><div class="box2"></div><div class="box3"></div><div class="box4"></div></div><div class="share"><hr class="line"><h2>Share Dilemma</h2><hr class="line"></div><div class="comment"><form claas="commentform" action="/html/tags/html_form_tag_action.cfm" method="post"><div><textarea class="comments">Write a comment..</textarea></div><div class="submit"><input type="submit" value="Submit"></div></form></div><div class="comment1"></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page3 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Are you wasting your life?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Yes</button><button class="buttons button2">No</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page4 = ''

const page5 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Should a driverless car kill<br>its passenger if it means saving four<br>strangers in the car behind?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Yes</button><button class="buttons button2">No</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page6 = ''

const page7 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Would you upload your brain to a computer, so<br>you would have a backup of it, if it was possible?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Yes</button><button class="buttons button2">No</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page8 = ''

const page9 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">If you were in Star Wars, what side<br>would you probably belong to?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">The dark side of the force</button><button class="buttons button2">The jedi´s side (the force)</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page10 = ''

const page11 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Your close friend is angry at you over "nothing"<br>what are you most likely to do?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Want to know why</button><button class="buttons button2">Stand your ground</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page12 = ''

const page13 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Do you think woman should have the<br>right to get an abortion</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Yes, I´m pro-choice</button><button class="buttons button2">No, I´m pro-life</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page14 = ''

const page15 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Should pornography be banned?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Yes</button><button class="buttons button2">No</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page16 = ''

const page17 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Are you in favour of the<br>legalisation of marijuana?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Yes</button><button class="buttons button2">No</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page18 = ''

const page19 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">If you had the power to end only one,<br>which would it be?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Cancer</button><button class="buttons button2">Racism</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page20 = ''

const page21 = '<header>Chapter 1. Think</header><div class="wrapper"><h1 class="question">Should it be possible for parents to<br>edit their babies genes?</h1><div class="left_arrow"><svg class="leftArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"><g><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0 c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744 c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z" /></g></svg></div><div class="right_arrow"><svg class="rightArrow" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;" xml:space="preserve"><g><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" /></g></svg></div><div class="nested"><button class="buttons button">Yes</button><button class="buttons button2">No</button><button class="buttons button3">Don´t know</button><button class="buttons button4">Leave blank</button></div><footer>Made by Humans</footer></div><script src="master.js"></script>'

const page22 = ''

const page23 = ''



// ANIMATION OF INDEX PAGE AS WELL AS AUTOMATIC LOAD OF PAGE 1
function fadeIn() {
    text = document.querySelector("main");
    text.classList.add("fadein")
    setTimeout(loadpage1, 4000)
}

//FUNCTIONS THAT LOAD THE NEXT PAGE WHEN AN ARROW IS CLICKED
function loadpage1() {
    title.textContent = "Human Dilemmas Page 1"
    body.innerHTML = page1;
    rightArrow = document.querySelector(".rightArrow");
    rightArrow.addEventListener("click", loadpage2)
}

function loadpage2() {
    title.textContent = "Human Dilemmas Page 2"
    body.innerHTML = page2;
    rightArrow = document.querySelector(".rightArrow");
    rightArrow.addEventListener("click", loadpage3)
    leftArrow = document.querySelector(".leftArrow")
    leftArrow.addEventListener("click", loadpage1)
}

function loadpage3() {
    title.textContent = "Human Dilemmas Page 3"
    body.innerHTML = page3;
    rightArrow = document.querySelector(".rightArrow");
    rightArrow.addEventListener("click", loadpage5)
    leftArrow = document.querySelector(".leftArrow")
    leftArrow.addEventListener("click", loadpage2)
}
//function loadpage4() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
function loadpage5() {
    title.textContent = "Human Dilemmas Page 5"
    body.innerHTML = page5;
    rightArrow = document.querySelector(".rightArrow");
    rightArrow.addEventListener("click", loadpage7)
    leftArrow = document.querySelector(".leftArrow")
    leftArrow.addEventListener("click", loadpage3)
}
//function loadpage6() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage7() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage8() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage9() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage10() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage11() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage12() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage13() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage14() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage15() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage16() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage17() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage18() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage19() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage20() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage21() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage22() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}
//function loadpage23() {
//    title.textContent = "Human Dilemmas Page 2"
//    body.innerHTML = page2;
//    rightArrow = document.querySelector(".rightArrow");
//    rightArrow.addEventListener("click", loadpage3)
//    leftArrow = document.querySelector(".leftArrow")
//    leftArrow.addEventListener("click", loadpage1)
//}


