var button = document.getElementById("b");
var resultElement = document.getElementById('result');
var result = parseInt(resultElement.innerHTML);
var room1Element = document.getElementById('room1');

button.onclick = function() {
    var room1Input = document.getElementById('one').value;
    if (room1Input === "537") {
        result += 1; // Increment the result by 1
        resultElement.innerHTML = result; // Update the result in the HTML
        alert("Correct");
        button.style.display = 'none'; // Hide the room1 element
    } else {
        alert("Incorrect");
    }
};


//--------------------------------------------------
var button1 = document.getElementById("b1");
button1.onclick = function() {
    var room2 = document.getElementById('one1').value;
    if (room2 === "468") {
        result += 1; // Increment the result by 1
        resultElement.innerHTML = result; // Update the result in the HTML
        alert("Correct");
    } else {
        alert("Incorrect");
    }
};
//----------------------------------------------------------
var button2 = document.getElementById("b2");
button2.onclick = function() {
    var room2 = document.getElementById('one2').value;
    if (room2 === "235") {
        result += 1; // Increment the result by 1
        resultElement.innerHTML = result; // Update the result in the HTML
        alert("Correct");
    } else {
        alert("Incorrect");
    }
};
//-----------------------------------------------------
var button3 = document.getElementById("b3");
button3.onclick = function() {
    var room2 = document.getElementById('one3').value;
    if (room2 === "674") {
        result += 1; // Increment the result by 1
        resultElement.innerHTML = result; // Update the result in the HTML
        alert("Correct");
    } else {
        alert("Incorrect");
    }
};
//-----------------------------------------------------

var button4 = document.getElementById("b4");
button4.onclick = function() {
    var room2 = document.getElementById('one4').value;
    if (room2 === "271") {
        result += 1; // Increment the result by 1
        resultElement.innerHTML = result; // Update the result in the HTML
        alert("Correct");
    } else {
        alert("Incorrect");
    }
};
