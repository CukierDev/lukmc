// Set the date we're counting down to
var countDownDate = new Date("Mar 2, 2024 18:00:00").getTime();
// Function to update the countdown
function updateCountdown() {
    // Get the current date and time
    var now = new Date().getTime();
    // Calculate the time remaining
    var distance = countDownDate - now;
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the countdown with sliding animation for the last character only
    var countdownText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = ''; // Clear existing content
    for (var i = 0; i < countdownText.length - 1; i++) {
        var charSpan = document.createElement('span');
        charSpan.textContent = countdownText[i];
        countdownElement.appendChild(charSpan);
    }
    var lastCharSpan = document.createElement('span');
    lastCharSpan.className = 'countdown-char';
    lastCharSpan.textContent = countdownText[countdownText.length - 1];
    countdownElement.appendChild(lastCharSpan);
    // Trigger animation for the last character
    setTimeout(function () {
        lastCharSpan.style.opacity = 1;
        lastCharSpan.style.transform = "translateY(0)";
    }, 100); // You can adjust the delay for the last character here
}
// Update the countdown every 1 second
var x = setInterval(updateCountdown, 1000);
// Initial update
updateCountdown();