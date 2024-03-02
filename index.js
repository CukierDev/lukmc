// Set the date we're counting down to
var debugMode = window.location.search.includes('DEBUG');
var countDownDate = debugMode ? new Date().getTime() + 3000 : new Date("Mar 2, 2024 18:30:00").getTime();

// Function to update the countdown
function updateCountdown() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time remaining
    var distance = countDownDate - now;

    // Check if the countdown has reached 0 or less
    if (distance <= 0) {
        // Execute your function here
        countdownReachedZero();
        
        // Stop the countdown
        clearInterval(x);
        setCountdownToZero()
        
        // Display a message or perform any other actions
        console.log("EXPIRED");
        return;
    }

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

// Function to be executed when the countdown reaches 0
function countdownReachedZero() {
    console.log("Countdown has reached zero. Your custom function can be executed here.");
    // Add your custom actions here
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function setCountdownToZero() {
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "0d 0h 0m 0s"; // Display "0d 0h 0m 0s" or any other desired message
    await delay(3000);
    window.location.href="witaj/";
}

// Update the countdown every 1 second
var x = setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
