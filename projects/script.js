document.getElementById('alertButton').onclick = function() {
    alert('Hello!Email me please at Blablabla@');
};
const userInput = prompt("Please enter your name:");
if (userInput !== null) {
    alert("Hello, " + userInput + "!");
}