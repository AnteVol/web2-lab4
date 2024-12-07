let count = 0;
setInterval(function() {
    count++;
    document.getElementById("timer").textContent = count;
}, 1000);