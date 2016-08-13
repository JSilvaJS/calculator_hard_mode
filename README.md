# Synopsis 
The goal is to build a calculator using HTML, CSS, and with functionality (JS) like pictured below. 
### Mock Up
![alt text](https://tiy-learn-content.s3.amazonaws.com/4e298e7a-calculator.png)
### In Action
![alt text](https://tiy-learn-content.s3.amazonaws.com/b12081f9-calculator.gif)
# Sample Code
``` javascript 
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
```
# Deployed Code
[Check out the final product here!](http://jsilvajs.github.io/calculator_hard_mode/)
