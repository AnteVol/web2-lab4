const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const countDisplay = document.getElementById("count");

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

incrementButton.addEventListener("click", function() {
    count++;
    updateCount();
});

decrementButton.addEventListener("click", function() {
    count--;
    updateCount();
});