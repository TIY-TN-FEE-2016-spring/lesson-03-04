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

var wait = new Promise((resolve) => {
  window.setTimeout(() => {
    resolve();
  }, 2000);
});

wait.then(() => {
  console.log(`I knew you'd come back for me!!!`);
}).then(() => {
  console.log(`This dresser should be big enough for the two of us...`);
}).then(() => {
  console.log(`I froze to death and didn't even get an Oscar!!!`);
});
