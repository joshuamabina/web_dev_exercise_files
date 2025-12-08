const n = 10; // height of the pyramid
let contentEl = document.getElementById("content");

for(let i = 1; i <= n; i++) {
    for(let spaces = 0; spaces < n - i; spaces++) {
        contentEl.innerHTML += "&nbsp;";
    }
    
    for(let number = 1; number <= i; number++) {
        contentEl.innerHTML += number;
    }

    contentEl.innerHTML += "<br/>";
}