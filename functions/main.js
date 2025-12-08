let computeButton = document.getElementById("computeButton");

let firstNumber;
let secondNumber;

computeButton.addEventListener("click", function (e) {
    e.preventDefault();

    firstNumber = Number.parseInt(document.getElementById("firstNumberInput").value.trim());
    secondNumber = Number.parseInt(document.getElementById("secondNumberInput").value.trim());

    if(firstNumber == "" || firstNumber == null || Number.isNaN(firstNumber)) {
        console.log(`firstNumber: ${firstNumber}`);
        alert("TODO: Style form errors");
        return false;
    }

    if(secondNumber == "" || secondNumber == null || Number.isNaN(secondNumber)) {
        console.log(`firstNumber: ${secondNumber}`);
        alert ("TODO: Style form errors");
        return false;
    }
    
    const option = prompt("What do you want? \nEnter: (1) Addition (2) Substraction (3) Multiplication (4) Division");
    console.log(`You have selected: ${option}`);

    switch(option) {
        case "1":
            alert("You answer is: " + add());
            break;
        case "2":
            alert("You answer is: " + substract());
            break;
        case "3":
            alert("Your answer is: " + multiply());
            break;
        case "4":
            alert("You answer is: " + divide());
        default:
            alert("Enter a valid option: \nEnter: (1) Addition (2) Substraction (3) Multiplication (4) Division.");
    }
});

function add() {
    return firstNumber + secondNumber;
}

function substract() {
    return firstNumber - secondNumber;
}

function multiply() {
    return firstNumber * secondNumber;
}

function divide() {
    return firstNumber / secondNumber;
}