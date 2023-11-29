/*Timer with only one input

Declaración de variables para los botones
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

// Declaración de variables para el temporizador
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const currentTime = document.getElementById("current-time");

setInitialValues();

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

// Variable para mantener el intervalo
var time = null;

// Función para iniciar el temporizador
function startTimer() {
  buttonsAction();
  // Convertir valores a números y manejar campos vacíos
  let h = parseInt(hours.value) || 0;
  let m = parseInt(minutes.value) || 0;
  let s = parseInt(seconds.value) || 0;

  if (h < 0 || m < 0 || s < 0 || m > 59 || s > 59) {
    alert("Please enter a valid time");
    return;
  }

  if (h === 0 && m === 0 && s === 0) {
    alert("Please enter a valid time");
    return;
  }

  if (!time) {
    time = setInterval(decrementTime, 1000);
  }
}

function decrementTime() {
  let h = parseInt(hours.value) || 0;
  let m = parseInt(minutes.value) || 0;
  let s = parseInt(seconds.value) || 0;

  // Lógica para decrementar el tiempo
  if (s > 0) {
    s--;
  } else {
    if (m > 0) {
      s = 59;
      m--;
    } else if (h > 0) {
      m = 59;
      s = 59;
      h--;
    } else {
      stopTimer();
      setInitialValues();
      alert("Timer finished!");
      return;
    }
  }
  // Actualizar los campos de texto
  actData(h, m, s);
}

// Función para detener el temporizador
function stopTimer() {
  clearInterval(time);
  time = null;
}

// Función para resetear el temporizador
function resetTimer() {
  setInitialValues();
  currentTime.innerHTML = `Current time:`; // Reinicia el texto
  stopTimer(); // Detiene el temporizador
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
}

function buttonsAction() {
  seconds.disabled = true;
  minutes.disabled = true;
  hours.disabled = true;
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
}

function setInitialValues() {
  seconds.disabled = false;
  minutes.disabled = false;
  hours.disabled = false;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}

function actData(h, m, s) {
  hours.value = h;
  minutes.value = m;
  seconds.value = s;
  h = h.toString();
  m = m.toString();
  s = s.toString();

  if (h.length < 2) {
    h = "0" + h;
  }
  if (m.length < 2) {
    m = "0" + m;
  }
  if (s.length < 2) {
    s = "0" + s;
  }
  currentTime.innerHTML = `Current time: ${h}h:${m}m:${s}s`;
}
*/

//Multiple Timers
class Timer {
  constructor(
    hoursSelector,
    minutesSelector,
    secondsSelector,
    displaySelector
  ) {
    this.hoursElem = document.querySelector(hoursSelector);
    this.minutesElem = document.querySelector(minutesSelector);
    this.secondsElem = document.querySelector(secondsSelector);
    this.display = document.querySelector(displaySelector);

    this.time = null;
    this.setInitialValues();
  }

  start() {}

  decrementTime() {}

  stop() {}

  reset() {}

  setInitialValues() {}

  disableInputs() {}

  enableInputs() {}

  updateDisplay(h, m, s) {}
}

const timer1 = new Timer("#hours1", "#minutes1", "#seconds1", "#current-time1");
document
  .querySelector("#start1")
  .addEventListener("click", () => timer1.start());
document.querySelector("#stop1").addEventListener("click", () => timer1.stop());
document
  .querySelector("#reset1")
  .addEventListener("click", () => timer1.reset());

const timer2 = new Timer("#hours2", "#minutes2", "#seconds2", "#current-time2");
document
  .querySelector("#start2")
  .addEventListener("click", () => timer2.start());
document.querySelector("#stop2").addEventListener("click", () => timer2.stop());
document
  .querySelector("#reset2")
  .addEventListener("click", () => timer2.reset());

