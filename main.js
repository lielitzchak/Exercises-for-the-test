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

// var names = [
//   "liel",
//   "amir",
//   "jacob",
//   "shay",
//   "itzchak",
//   "shimon",
//   "keren",
//   "avi",
//   "tal",
//   "moshe",
// ];
// console.log(names);
// names.sort();
// console.log(names);

// var ages = [4, 5, 2, 19, 54, 21, 9, 4, 87, 46, 525];
// ages.sort()

// console.log(ages);

// function longest(s1, s2) {
//   var allArgue = s1.push(s2);
//   document.write(allArgue.sort());
//   var all = s1;
//   return all;
// }
// var a = ["a", "b", 5, 5, 8, "c", "d", "54545","e", 4, 7, "f", "g", "r", 8, 1, "s"];
//   b = ["h", "i", "j", "k ", "l", "m", "n", "o", "p", "q"];
// console.log(longest(a, b));

// function filter_list(l) {
//   for (let i = 0; i < l.length; i++) {
//    var m= l.filter(Number.isInteger)

//     return m;
//   }
// }

// console.log(filter_list(a));
//? תרגילי timers
//! ///////////////////////////////////////////////////////
//? exeresie 1
// function forLogEvery4Min() {
//   var sun = setInterval(() => {
//     console.log("liel itzchak");
//   }, 4000);
//   return sun
// }
// forLogEvery4Min();
// var x = 0;
// //? exeresie 2

// // function funEVERY3MIN(){
// //   var sum = setInterval(()=>{
// //     prompt("itzchak")
// //   },3000)
// //   return sum
// // }
// // funEVERY3MIN()

// // //? exeresie 3
// // function every2second() {
// //   var sum = window.setInterval(() => {}, 900000);
// // }

// // function jhj(event) {
// learn with itzchak
//   event.preventDefult();

// }

// var playBtn1 = document.getElementById("a");
// playBtn1.addEventListener("su")

// function gete(x) {
//   x = 10;
//   console.log(x); //10
// }
// var y = 20; //20
// gete(y);
// console.log(y);
// function changeArray(x) {
//   //[20]
//   x.push(30);
//   // console.log(x)[(20, 30)];
// }
// var y = [20]; //[20]
// changeArray(y);
// //!x[first] =
// function changeObj(x) {
// {first:22}
//   x.first = 24; //{first:24}
//   console.log(x)[(20, 30)];
// }
// var y = {
//   first: 22,
// }; //{first:22}-
// changeObj(y);

// function nb(a, b, isMulti) {
//   if (isMulti) {
//     console.log(a * b);
//     return;
//   }
//   console.log(a + b);
// }
// nb(5, 4);
// nb(5, 4, true);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function jh(num1, num2) {

//   var res = num1 / num2;
//   console.log(res);
// }
// jh(1, 8);
// jh(1, 8);
// jh('a',0);

// var a = [];
// var firstName = "liel";
// var last = "itzchak";
// var age = 21;
// var b = {
//   firstName,
//   last,
//   age,
// };

// a.push(b);

// var a = [1, 2, 3, 4, 5, 6];
// var b = [7, 8, "h", 9, 5, 84, 1, 4, 1, 2, 10];
// var c = [7, 8, "h", 9, 5, 1, 84, 4, 1, 2, 10];

// console.log(b.sort((a, b) => a - b));
// console.log(c.sort((a, b) => a - b));

// var filter = a.push(6, ...b, ...b, 5);
// // console.log(g.flat(2));
// console.log(g);
// var x = () => {
//   console.log("jh");
// };
// var y = setInterval(x, 3000);

// setTimeout(() => {
//   clearInterval(y);
// }, 7000);

// var hg = {
//   uj: ["h"],
// };
// Object.keys(hg).length;

// var allPohoto = [
//   "https://images.unsplash.com/photo-1630370938991-b8b59e4a1f65?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630412931755-766c52c640a3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630412931755-766c52c640a3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630336692286-4fc2201c252f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630355267690-c3541cbc7fd6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630373390208-6f298c4fb87b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630425347815-98fe4f007ab9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630359555185-87e1a286cf6b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630390064044-e80c19de00d8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//   "https://images.unsplash.com/photo-1630417591406-6584f2d324bd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
// ];
// var divs = document.querySelectorAll(".allClasss");
// var myDiv = document.querySelector("#myDiv");
// console.log(divs);
// for (let i = 0; i < divs.length; i++) {
//   myDiv.innerHTML += `<div>
//     <img src="">
//   </div>`

//   console.log(divs[i].src);
// }

// for (let i = 0; i < divs.length; i++) {
// console.log(divs[i].src);
// }

// myDiv.innerHTML = `<p> hello word</p>
// <ul>
// <li> ${(3, 4)}</li>

// </ul>`;
// // myDiv.console.log(list);

// var lists = document.getElementById("lists");
// lists.style.background = "red";

// var inputUser = document.querySelector("#inputUser");
// var btn = document.getElementById("btn");

// inputUser.oninput = () => {
//   console.log(inputUser.value);
// };
// inputUser.onchange = () => {
//   alert(inputUser.value);
// };
// var myArray = [];
// var myObject = {
//   myName: "liel",
//   lastName: "itzchak",
//   age: 21,
// };

// myArray.push(myObject)
// console.log(myArray);

//!  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var counter = 0;
// function counterEverySec() {
//   var setTime = setInterval(() => {
//     console.log(counter++);
//     clearInterval(setTime);
//   }, 1000);
// }

// counterEverySec();

function getMiddle(s) {
  for (var i = 0; i < s.length; i++) {
    if (s % 2 == 1) {
      console.log(i);
    } else if (s % 2 == 0) {
      console.log(i);
    }
  }
}
getMiddle("liel");
