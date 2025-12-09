const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const wordsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

let contentEl = document.getElementById("content");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const number = Number.parseInt(document.getElementById("numberInput").value.trim());

  if (number === Number.NaN || number === null || number === undefined) {
    return false;
  }

  if(number < 0 || number > 10) {
    return false;
  }

  alert(`The number ${number} in words is: ${wordsArray[number]}`);
  contentEl.innerHTML = `<h4 class="text-muted">The number ${number} in words is: <strong>${wordsArray[number]}</strong></h4>`;
});