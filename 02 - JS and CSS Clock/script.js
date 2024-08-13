// Moving the second hand

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // get the current date/time
  const now = new Date();
  // get the second, minutes and hour of the current time
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();
  // convert it to degrees of rotation for the clock
  const deg = seconds * 6 + 90;
  const minuteDeg = minutes * 6 + 90;
  const hourDeg = hour * 30 + 90;
  // transform rotate the second hand
  secondHand.style.transform = `rotate(${deg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  console.log(seconds, deg);
}

// run the function every second

setInterval(setDate, 1000);
