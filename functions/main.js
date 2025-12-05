let computeButton = document.getElementById("computeButton");

let firstNumber;
let secondNumber;

computeButton.addEventListener("click", function (e) {
    e.preventDefault();

    firstNumber = Number.parseInt(document.getElementById("firstNumberInput").value.trim());
    secondNumber = Number.parseInt(document.getElementById("secondNumberInput").value.trim());

    const option = prompt("What do you want? \nEnter: (1) Addition (2) Substraction (3) Multiplication (4) Division");
    console.log(`You have selected: ${option}`);
    
    switch (option) {
        case "1":
            alert("You answer is: " + add());
            break;
        case "2":
            alert("You answer is: " + substract());
            break;
        default:
            alert("Enter a valid option: \nEnter: (1) Addition (2) Substraction (3) Multiplication (4) Division.");
    }
});

function add () {

    return firstNumberInput + secondNumberInput;
}

function substract() {
    return firstNumber - secondNumber;
}