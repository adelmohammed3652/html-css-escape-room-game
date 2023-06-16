var button = document.getElementById("b");
var resultElement = document.getElementById('result');
var result = parseInt(resultElement.innerHTML);

button.onclick = function() {
    var room1 = document.getElementById('one').value;
    if (room1 === "365") {
        result += 1; // Increment the result by 1
        resultElement.innerHTML = result; // Update the result in the HTML
        alert("Correct");
    } else {
        alert("Incorrect");
    }
};
