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
  
  // Check the result and display appropriate message
  if (result >= 4) {
    // Clear the screen
    document.body.innerHTML = '';
    
    // Create a black screen
    var blackScreen = document.createElement('div');
    blackScreen.style.background = 'black';
    blackScreen.style.width = '100vw';
    blackScreen.style.height = '100vh';
    
    // Create the options buttons
    var nextLevelButton = document.createElement('button');
    nextLevelButton.innerText = 'Continue to Next Level';
    nextLevelButton.style.margin = '10px';
    nextLevelButton.style.padding = '10px 20px';
    nextLevelButton.style.backgroundColor = 'green';
    nextLevelButton.style.color = 'white';
    nextLevelButton.style.fontSize = '16px';
    nextLevelButton.onclick = function() {
      // Logic to move to the next level
      moveToNextLevel(); // Call your function to handle moving to the next level
    };
    
    var endGameButton = document.createElement('button');
    endGameButton.innerText = 'End the Game';
    endGameButton.style.margin = '10px';
    endGameButton.style.padding = '10px 20px';
    endGameButton.style.backgroundColor = 'red';
    endGameButton.style.color = 'white';
    endGameButton.style.fontSize = '16px';
    endGameButton.onclick = function() {
      // Logic to end the game and show celebrating screen
      showCelebratingScreen(); // Call your function to handle showing the celebrating screen
    };
    
    // Append buttons to the black screen
    blackScreen.appendChild(nextLevelButton);
    blackScreen.appendChild(endGameButton);
    
    // Append the black screen to the body
    document.body.appendChild(blackScreen);
  }
};

buttonNextLevel.onclick = function() {
  window.location.href = "D:\Adel Mohammed\coding\coding projects\html css escape room game\level2.html";
};

function showCelebratingScreen() {
  // Logic to show the celebrating screen
  // Add your code here
  alert('Congratulations! You have completed the game.');
  window.location.reload();

  // Add more celebrating screen elements as needed
}
