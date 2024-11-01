document.addEventListener("DOMContentLoaded", function () {
  const countdownDate = new Date("2024-11-07T00:00:00").getTime();

  const interval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days + "d";
    document.getElementById("hours").textContent = hours + "h";
    document.getElementById("minutes").textContent = minutes + "m";
    document.getElementById("seconds").textContent = seconds + "s";

    if (timeLeft < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Happy Birthday Nandini!";
    }
  }, 1000);
});