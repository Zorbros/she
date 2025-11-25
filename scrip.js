const correctPassword = "0427";
let currentInput = "";

function pressKey(key) {
    if (currentInput.length < correctPassword.length) {
        currentInput += key;
        updateDisplay();
    }
    if (currentInput.length === correctPassword.length) {
        checkPassword();
    }
}

function updateDisplay() {
    document.getElementById("display").textContent = "*".repeat(currentInput.length);
}

function checkPassword() {
    const message = document.getElementById("message");
    const link = document.getElementById("secretLink");
    const img = document.getElementById("busimage");
    const lock = document.querySelector(".lock");

    if (currentInput === correctPassword) {

        lock.style.display = "none";      
        link.style.display = "block";
        message.style.display = "none";   
        link.href = "https://jeku.netlify.app";
        img.src = "bus.png";

    } else {
        message.textContent = "Nuh uh";
        currentInput = "";
        updateDisplay();
    }
}
