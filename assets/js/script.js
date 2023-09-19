// "use strict";

// let rightIcon = document.querySelector(
//   ".slider-area .slider .icons i:nth-child(2)"
// );
// let leftIcon = document.querySelector(
//   ".slider-area .slider .icons i:nth-child(1)"
// );

// function rightSlider() {
//   let activeSlider = document.querySelector(".active-slider");
//   if (activeSlider.nextElementSibling != null) {
//     activeSlider.classList.remove("active-slider");
//     activeSlider.nextElementSibling.classList.add("active-slider");
//   } else {
//     activeSlider.classList.remove("active-slider");
//     activeSlider.parentNode.firstElementChild.classList.add("active-slider");
//   }
// }

// function leftSlider() {
//   let activeSlider = document.querySelector(".active-slider");
//   if (activeSlider.previousElementSibling != null) {
//     activeSlider.classList.remove("active-slider");
//     activeSlider.previousElementSibling.classList.add("active-slider");
//   } else {
//     activeSlider.classList.remove("active-slider");
//     activeSlider.parentNode.lastElementChild.classList.add("active-slider");
//   }
// }

// rightIcon.addEventListener("click", rightSlider);

// leftIcon.addEventListener("click", leftSlider);

// rightIcon.addEventListener("mouseover", rightSlider);

// leftIcon.addEventListener("mouseover", leftSlider);

// // setInterval(() => {
// //   rightSlider();
// // }, 1000);

// setTimeout(() => {
//   //   console.log("Hello World");
//   setInterval(() => {
//     rightSlider();
//   }, 1000);
// }, 3000);

// let a = document.querySelector("a");

// a.addEventListener("click", function (e) {
//   //   console.log(e);
//   //   e.preventDefault();
//   //   console.log("sahfa");
//   //   console.log(e.target);
//   console.log(e.target.innerText);
// });

// let fileInput = document.querySelector("input");

// fileInput.addEventListener("change", function (e) {
//   console.log(e);
// });

// let dragElem = document.getElementById("drag-elem");
// let dropElem = document.getElementById("drop-elem");

// dragElem.ondragstart = () => {
//   console.log("start");
// };

// dragElem.ondrag = () => {
//   console.log("dragging");
// };

// dragElem.ondragend = () => {
//   console.log("start");
// };

// dragElem.ondragover = () => {
//   console.log("working");
// };

// dragElem.ondragleave = () => {
//   console.log("leave");
// };

let dragElem = document.getElementById("drag-elem");
let dropElem = document.getElementById("drop-elem");
let dropElem2 = document.getElementById("drop-elem2");

dragElem.ondragstart = (e) => {
  let id = e.target.getAttribute("id");
  e.dataTransfer.setData("id", id);
  //   console.log(e.dataTransfer.setData("id", id));
};

dropElem.ondragover = (e) => {
  e.preventDefault();
};

dropElem.ondrop = (e) => {
  let id = e.dataTransfer.getData("id");
  let elem = document.getElementById(id);

  e.target.append(elem);
  //   e.target.append(document.getElementById(e.dataTransfer.getData("id")));
};

dropElem2.ondragover = (e) => {
  e.preventDefault();
};

dropElem2.ondrop = (e) => {
  let id = e.dataTransfer.getData("id");
  let elem = document.getElementById(id);

  e.target.append(elem);

  //   e.target.append(document.getElementById(e.dataTransfer.getData("id")));
};
