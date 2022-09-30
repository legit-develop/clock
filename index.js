const hourEl = document.querySelector(".hour");
console.log(hourEl);
const minuteEl = document.querySelector(".minute");
console.log(minuteEl);
const secondEl = document.querySelector(".second");
console.log(secondEl);

function updateClock() {
  const currentDate = new Date();
  console.log(currentDate);
  setTimeout(updateClock, 1000);
  console.log(currentDate);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  console.log(hour, minutes, seconds);
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  const minuteDeg = (minutes / 60) * 360;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  const secondDeg = (seconds / 60) * 360;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
