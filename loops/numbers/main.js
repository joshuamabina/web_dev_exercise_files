let contentEl = document.getElementById("content");

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    contentEl.innerHTML = "";

    const pyramidHeight = Number.parseInt(document.getElementById("pyramidHeightInput").value.trim());

    printPyramid(pyramidHeight);
});

function printPyramid(pyramidHeight = 10) {
    console.log(`Pyramid height: ${pyramidHeight}`);

    for (let i = 1; i <= pyramidHeight; i++) {
        for (let spaces = 0; spaces < pyramidHeight - i; spaces++) {
            contentEl.innerHTML += "&nbsp;";
        }

        for (let number = 1; number <= i; number++) {
            contentEl.innerHTML += number;
        }

        contentEl.innerHTML += "<br/>";
    }
}

printPyramid();