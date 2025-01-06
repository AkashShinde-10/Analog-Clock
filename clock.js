let hrs = document.getElementById("hr");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");


function analogClock(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let hrRotation = h*30 + m/2;
  let minRotation = m*6;
  let secRotation = s*6;

  hrs.style.transform = `rotate(${hrRotation}deg)`;
  mins.style.transform = `rotate(${minRotation}deg)`;
  secs.style.transform = `rotate(${secRotation}deg)`;
}


setInterval(analogClock, 1000)