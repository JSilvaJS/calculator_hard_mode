var btn_reset, answerarea, btn_7, btn_8, btn_9, btn_divi, btn_4, btn_5, btn_6, btn_mult, btn_1, btn_2, btn_3, btn_minus, btn_0, btn_dot, btn_equals, btn_plus;

btn_reset = document.querySelector('#reset');
answerarea = document.querySelector('#answer');
btn_7 = document.querySelector('#seven');
btn_8 = document.querySelector('#eight');
btn_9 = document.querySelector('#nine');
btn_divi = document.querySelector('#divide');
btn_4 = document.querySelector('#four');
btn_5 = document.querySelector('#five');
btn_6 = document.querySelector('#six');
btn_mult = document.querySelector('#multiply');
btn_1 = document.querySelector('#one');
btn_2 = document.querySelector('#two');
btn_3 = document.querySelector('#three');
btn_minus = document.querySelector('#minus');
btn_0 = document.querySelector('#zero');
btn_dot = document.querySelector('#dot');
btn_equals = document.querySelector('#equals');
btn_plus = document.querySelector('#plus');
btn_minus = document.querySelector('#minus');



function moveToAnswer1() {
	var total = answerarea.textContent + '1'
	answerarea.textContent = total;
}

function moveToAnswer2() {
	var total = answerarea.textContent + '2'
	answerarea.textContent = total;
}

function moveToAnswer3() {
	var total = answerarea.textContent + '3'
	answerarea.textContent = total;
}

function moveToAnswer4() {
	var total = answerarea.textContent + '4'
	answerarea.textContent = total;
}

function moveToAnswer5() {
	var total = answerarea.textContent + '5'
	answerarea.textContent = total;
}

function moveToAnswer6() {
	var total = answerarea.textContent + '6'
	answerarea.textContent = total;
}

function moveToAnswer7() {
	var total = answerarea.textContent + '7'
	answerarea.textContent = total;
}

function moveToAnswer8() {
	var total = answerarea.textContent + '8'
	answerarea.textContent = total;
}

function moveToAnswer9() {
	var total = answerarea.textContent + '9'
	answerarea.textContent = total;
}

function moveToAnswer0() {
	var total = answerarea.textContent + '0'
	answerarea.textContent = total;
}

function moveToAnswerClear() {
	 answerarea.textContent = ''
}

function moveToAnswerPlus() {
	answerarea.textContent = answerarea.textContent + '+';
}

function moveToAnswerDivi() {
	answerarea.textContent = answerarea.textContent + '/';
}

function moveToAnswerMult() {
	answerarea.textContent = answerarea.textContent + '*';
}

function moveToAnswerMinus() {
	answerarea.textContent = answerarea.textContent + '-';
}

function moveToAnswerEquals() {
	answerarea.textContent = eval(answerarea.textContent);
}

btn_1.addEventListener('click', moveToAnswer1);
btn_2.addEventListener('click', moveToAnswer2);
btn_3.addEventListener('click', moveToAnswer3);
btn_4.addEventListener('click', moveToAnswer4);
btn_5.addEventListener('click', moveToAnswer5);
btn_6.addEventListener('click', moveToAnswer6);
btn_7.addEventListener('click', moveToAnswer7);
btn_8.addEventListener('click', moveToAnswer8);
btn_9.addEventListener('click', moveToAnswer9);
btn_0.addEventListener('click', moveToAnswer0);
btn_plus.addEventListener('click', moveToAnswerPlus);
btn_divi.addEventListener('click', moveToAnswerDivi);
btn_mult.addEventListener('click', moveToAnswerMult);
btn_minus.addEventListener('click', moveToAnswerMinus);
btn_equals.addEventListener('click', moveToAnswerEquals);
btn_reset.addEventListener('click', moveToAnswerClear);












