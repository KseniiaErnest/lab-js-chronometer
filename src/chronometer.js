class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(printTimeCallback) {
    const invervalId = setInterval(() => {
    this.currentTime++
    if (printTimeCallback) {
      printTimeCallback()
    }
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  
  }

  computeTwoDigitNumber(value) {
    const valueToString = value.toString();
    if (valueToString.length === 2) {
      return valueToString
    } else if (valueToString.length === 1) {
      return '0' + valueToString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutesNumber = this.getMinutes();
    let minutesString = minutesNumber.toString();
    let seconds = this.getSeconds();
    let secondsFormat = this.computeTwoDigitNumber(seconds);

    // let minutes = this.getMinutes().toString();
    // let seconds = this.computeTwoDigitNumber(this.getSeconds());
    // return `${minutes}:${seconds}`;


    return `${minutesString}:${secondsFormat}`
  }
}
