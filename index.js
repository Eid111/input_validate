function validateInput() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.length < 6) {
        document.getElementById("errorMessage").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "none";
    }
    inputField.addEventListener('input', validateInput);
    inputField.addEventListener('change', validateInput);
}