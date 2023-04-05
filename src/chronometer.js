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
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
