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
    this.updateDisplay(0, 0, 0);
    this.toggleInputs(false);
  }

  toggleInputs(enable) {
    this.hoursElem.disabled = enable;
    this.minutesElem.disabled = enable;
    this.secondsElem.disabled = enable;
    this.startButton.disabled = enable;
  }

  start() {
    this.toggleInputs(true);
    
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
        this.toggleInputs(false);
      return;
    }

    if (this.time) {
      clearInterval(this.time);
    }
    this.time = setInterval(() => this.decrementTime(), 1000);
  }

  stop() {
    if (this.time) {
      clearInterval(this.time);
      this.time = null;
    }
    this.toggleInputs(false);
  }

  reset() {
    this.setInitialValues();
    this.display.innerHTML = `Current time:`;
    this.stop();
    this.updateDisplay(0, 0, 0);
  }
}

function createTimer(hours, minutes, seconds, currentTime, start, stop, reset) {
  const timer = new Timer(hours, minutes, seconds, currentTime, start);
  document.querySelector(start).addEventListener("click", () => timer.start());
  document.querySelector(stop).addEventListener("click", () => timer.stop());
  document.querySelector(reset).addEventListener("click", () => timer.reset());
}

createTimer("#hours1", "#minutes1", "#seconds1", "#current-time1", "#start1", "#stop1", "#reset1");
createTimer("#hours2", "#minutes2", "#seconds2", "#current-time2", "#start2", "#stop2", "#reset2");