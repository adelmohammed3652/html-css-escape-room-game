var button = document.getElementById("b");
var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");
var button4 = document.getElementById("b4");

var resultElement = document.getElementById('result');
var result = parseInt(resultElement.innerHTML);

var room1 = document.getElementById('room1');
var room2 = document.getElementById('room2');
var room3 = document.getElementById('room3');
var room4 = document.getElementById('room4');
var room5 = document.getElementById('room5');

button.onclick = function() {
  var room1Input = document.getElementById('one').value;
  if (room1Input === "537") {
    result += 1;
    resultElement.innerHTML = result;
    alert("Correct");
    button.style.display = 'none';
    room1.style.textDecoration = 'line-through';
  } else {
    alert("Incorrect");
  }
};

button1.onclick = function() {
  var room2Input = document.getElementById('one1').value;
  if (room2Input === "468") {
    result += 1;
    resultElement.innerHTML = result;
    alert("Correct");
    button1.style.display = 'none';
    room2.style.textDecoration = 'line-through';
  } else {
    alert("Incorrect");
  }
};

button2.onclick = function() {
  var room3Input = document.getElementById('one2').value;
  if (room3Input === "235") {
    result += 1;
    resultElement.innerHTML = result;
    alert("Correct");
    button2.style.display = 'none';
    room3.style.textDecoration = 'line-through';
  } else {
    alert("Incorrect");
  }
};

button3.onclick = function() {
  var room4Input = document.getElementById('one3').value;
  if (room4Input === "674") {
    result += 1;
    resultElement.innerHTML = result;
    alert("Correct");
    button3.style.display = 'none';
    room4.style.textDecoration = 'line-through';
  } else {
    alert("Incorrect");
  }
};

button4.onclick = function() {
  var room5Input = document.getElementById('one4').value;
  if (room5Input === "271") {
    result += 1;
    resultElement.innerHTML = result;
    alert("Correct");
    button4.style.display = 'none';
    room5.style.textDecoration = 'line-through';
  } else {
    alert("Incorrect");
  }
};

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

if (result >= 4) {
    alert("u have completed the game");

  }else{
    alert('u failed try again later');
  }

