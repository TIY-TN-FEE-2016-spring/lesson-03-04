'use strict';

window.setTimeout(function () {
  console.log(`Run this later`);
}, 2000);

let shouldTick = true;

window.setInterval(function () {
  if (shouldTick) {
    console.log(`Tick`);

    shouldTick = false;
    return;
  }

  console.log(`Tock`);
  shouldTick = true;
}, 1000);
