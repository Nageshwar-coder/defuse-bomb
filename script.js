let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");

let hintEl1 = document.getElementById('hintEl1');
let hintEl2 = document.getElementById('hintEl2');
let hintEl3 = document.getElementById('hintEl3');

setTimeout(function() {
    hintEl1.classList.remove("d-none");
}, 10000);

setTimeout(function() {
    hintEl2.classList.remove('d-none');
}, 15000);

setTimeout(function() {
    hintEl3.classList.remove('d-none');
}, 20000);

counter = 30;

let uniqueId = setInterval(function() {
    counter -= 1;
    timerEl.textContent = counter;
    if(counter === 0) {
        clearInterval(uniqueId);
        timerEl.style.color = "red";
        timerEl.textContent = "BOOM!";
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let defuserElText = defuserEl.value;
    if(defuserElText === "defuse" && event.key === "Enter" && counter !== 0) {
        timerEl.textContent = "You Made It !";
        clearInterval(uniqueId);
        hintEl1.classList.add("d-none");
        hintEl2.classList.add("d-none");
        hintEl3.classList.add("d-none");
    }
});