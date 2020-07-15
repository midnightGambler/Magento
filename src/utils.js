export function throttle(func, timer) {
  return function () {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined || this.lastCall - previousCall > timer) {
      func();
    }
  };
}
