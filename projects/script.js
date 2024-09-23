document.getElementById('alertButton').onclick = function() {
    alert('Hello!Email me please at Blablabla@');
};
const userInput = prompt("Please enter your name:");
if (userInput !== null) {
    alert("Hello, " + userInput + "!");
}
function validateInput() {
    const input = document.getElementById("inputField").value;
    const message = document.getElementById("message");

    if (input === "") {
        message.innerText = "Input cannot be empty!";
    } else {
        message.innerText = "Input accepted: " + input;
    }
}
