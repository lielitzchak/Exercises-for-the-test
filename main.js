//? exeresie 1
// console.log("israel");
//? exeresie 2
// console.log("liel");
//? exeresie 3
// console.log(4);
//? exeresie 4
// console.log(2, 5, 1, 8, 6);
// ? exeresie 5
// var num1 = 1,
//   num2 = 2,
//   num3 = 3,
//   num4 = 4;
// var avg = num1 + num2 + num3 + num4 / 4;
// console.log(avg);
// ? exeresie 6
// var width = 15,
//   hight = 2,
//   sum = width * hight;
// console.log(sum);

//? exeresie 7
// var numberOne = 4,
//   numberTow = 8,
//   temp;
// console.log(numberOne);
// console.log(numberTow);
// console.log(temp);
// temp = numberOne;
// numberOne = numberTow;
// numberTow = temp;
// console.log(numberOne);
// console.log(numberTow);
// console.log(temp);
//? exeresie 8
// btn8 = document.getElementById("btn8");
// btn8.onclick = () => {
//   var userNumbers8 = document.getElementById("userNumbers8").value,
//     userNumbers8_1 = document.getElementById("userNumbers8_1").value;
//   console.log(userNumbers8);
//   console.log(userNumbers8_1);
// };

// ?exeresie 9
// var myString = "3";
// function PlacementString(g) {
//   var g = 4;
//   g = 4521;
//   console.log(g);
// }
// PlacementString(myString);
// console.log(myString);
// ? exeresie 10

// var playBtn = document.getElementById("playBtn"),
//   stopBtn = document.getElementById("stopBtn"),
//   bigDiv = document.getElementById("bigDiv"),
//   smallDiv = document.getElementById("smallDiv"),
//   position = 0,
//   top = 0,
//   myIntervalId,
//   divTop = 0;

// function play() {
//   myIntervalId = window.setInterval(() => {
//     smallDiv.style.left = `${position++}px`;
//     console.log(position);
//     if (position > 300) {
//       stop();
//     }
//   }, 10);
// }

// function stop() {
//   window.clearInterval(myIntervalId);
// }
// playBtn.onclick = play;
// stopBtn.onclick = stop;
// function play() {
//   internalId = window.setInterval(() => {
//     if (counter >= 300) {
//       smallDiv.style.top = `${positionTop++}px`;
//       counter++;
//     }
//     if (counter >= 300) {
//       clearInterval(internalId);
//     }
//     if (counter < 600) {
//       internalId = window.setInterval(() => {
//         smallDiv.style.left = `${positionLeft++}px`;
//         if (positionLeft >= 300) {
//           clearInterval(internalId);
//         }
//       }, 2000);
//     }
//   }, 1000);
// }
// function stop() {
//   window.clearInterval(internalId);
// }
// playBtn.onclick = play();
// stopBtn.onclick = stop();

// playBtn.onclick = () => {
//   internalId = window.setInterval(() => {
//     smallDiv.style.left = `${positionLeft++}px`;
//     if (size > 300) {
//       window.clearInterval(internalId);
//     }
//     if (size > 200) {
//       internalId = window.setInterval(() => {
//         if (size > 200) {
//           smallDiv.style.top = `${positionTop++}px`;

//           window.clearInterval(internalId);
//         }
//       }, 2000);
//     }
//   },10);
// };
// stopBtn.onclick = () => {};





// תרגילי מערכים
