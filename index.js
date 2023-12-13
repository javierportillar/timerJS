//Multiple Timers
class Timer {
  constructor(
    hoursSelector,
    minutesSelector,
    secondsSelector,
    displaySelector,
    startButtonSelector
  ) {
    this.hoursElem = document.querySelector(hoursSelector);
    this.minutesElem = document.querySelector(minutesSelector);
    this.secondsElem = document.querySelector(secondsSelector);
    this.display = document.querySelector(displaySelector);
    this.startButton = document.querySelector(startButtonSelector);

    this.time = null;
    this.setInitialValues();
  }

  updateDisplay(h, m, s) {
    this.hoursElem.value = h;
    this.minutesElem.value = m;
    this.secondsElem.value = s;
    h = h.toString();
    m = m.toString();
    s = s.toString();

    this.display.innerHTML = `Current time: ${h}h:${m}m:${s}s`;
  }

  decrementTime() {
    let h = parseInt(this.hoursElem.value) || 0;
    let m = parseInt(this.minutesElem.value) || 0;
    let s = parseInt(this.secondsElem.value) || 0;

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
        this.stop();
        this.setInitialValues();
        alert("Timer finished!");
        return;
      }
    }

    this.updateDisplay(h, m, s);
  }

  setInitialValues() {
    this.hoursElem.value = 0;
    this.minutesElem.value = 0;
    this.secondsElem.value = 0;
    this.enableInputs();
  }

  disableInputs() {
    this.hoursElem.disabled = true;
    this.minutesElem.disabled = true;
    this.secondsElem.disabled = true;
  }

  enableInputs() {
    this.hoursElem.disabled = false;
    this.minutesElem.disabled = false;
    this.secondsElem.disabled = false;
  }

  start() {
    this.disableInputs();
    this.startButton.disabled = true;

    let h = parseInt(this.hoursElem.value) || 0;
    let m = parseInt(this.minutesElem.value) || 0;
    let s = parseInt(this.secondsElem.value) || 0;

    if (
      h < 0 ||
      m < 0 ||
      s < 0 ||
      m > 59 ||
      s > 59 ||
      (h === 0 && m === 0 && s === 0)
    ) {
      alert("Please enter a valid time");
      this.enableInputs();
      return;
    }

    if (this.time) {
      clearInterval(this.time);
    }
    this.time = setInterval(() => this.decrementTime(), 1000);
  }

  stop() {
    this.startButton.disabled = false;
    if (this.time) {
      clearInterval(this.time);
      this.time = null;
    }
    this.enableInputs();
  }

  reset() {
    this.startButton.disabled = false;
    this.setInitialValues();
    this.display.innerHTML = `Current time:`;
    this.stop();
  }
}

const timer1 = new Timer(
  "#hours1",
  "#minutes1",
  "#seconds1",
  "#current-time1",
  "#start1"
);
document
  .querySelector("#start1")
  .addEventListener("click", () => timer1.start());
document.querySelector("#stop1").addEventListener("click", () => timer1.stop());
document
  .querySelector("#reset1")
  .addEventListener("click", () => timer1.reset());

const timer2 = new Timer(
  "#hours2",
  "#minutes2",
  "#seconds2",
  "#current-time2",
  "#start2"
);
document
  .querySelector("#start2")
  .addEventListener("click", () => timer2.start());
document.querySelector("#stop2").addEventListener("click", () => timer2.stop());
document
  .querySelector("#reset2")
  .addEventListener("click", () => timer2.reset());
