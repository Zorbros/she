const correctPassword = "0427";
let currentInput = "";

function pressKey(key) {
    if(currentInput.length < correctPassword.length){
        currentInput += key;
        updateDisplay();
    }
    if(currentInput.length === correctPassword.length){
        checkPassword();
    }
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
    document.getElementById("message").textContent = "";
}

function updateDisplay() {
    document.getElementById("display").textContent = "*".repeat(currentInput.length);
}

function checkPassword() {
    const message = document.getElementById("message");
    if(currentInput === correctPassword){
        message.style.color = "green";
        message.textContent = "lol";
    } else {
        message.textContent = "Nuh uh";
        currentInput = "";
        updateDisplay();
    }
}