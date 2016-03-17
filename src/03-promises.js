'use strict';

// // Callback HELL!!!
// window.setTimeout(() => {
//   console.log('Loading');
//
//   window.setTimeout(() => {
//     console.log(`Some data, but not everything... Hold on...`);
//
//     window.setTimeout(() => {
//       console.log(`I NEED MOAR DATAS!!!`);
//
//       window.setTimeout(() => {
//         console.log('Loading');
//
//         window.setTimeout(() => {
//           console.log(`Some data, but not everything... Hold on...`);
//
//           window.setTimeout(() => {
//             console.log(`I NEED MOAR DATAS!!!`);
//             window.setTimeout(() => {
//               console.log('Loading');
//
//               window.setTimeout(() => {
//                 console.log(`Some data, but not everything... Hold on...`);
//
//                 window.setTimeout(() => {
//                   console.log(`I NEED MOAR DATAS!!!`);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const wait = function(time) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, time);
  });
};

// Wait for 2000ms and THEN...
wait(2000).then(() => {
  console.log(`I knew you'd come back for me!!!`);

  // Return a wait of 1000ms
  return wait(1000);
}).then(() => {
  console.log(`This dresser should be big enough for the two of us...`);

  // Doesn't return a promise so the next then runs immediately
}).then(() => {
  console.log(`I froze to death and didn't even get an Oscar!!!`);
});
