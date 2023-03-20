"use strict";

const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const overley = document.querySelector(".overley");
// console.log(btns);

function modalShow() {
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
}
function modalHide() {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
}
function overleyShow() {
  overley.style.opacity = 1;
  overley.style.visibility = "visible";
}
function overleyHide() {
  overley.style.opacity = 0;
  overley.style.visibility = "hidden";
}
for (let i = 0; i < btns.length; i++) {
  //   console.log(btns[i]);
  btns[i].addEventListener("click", function () {
    modalShow();
    overleyShow();
  });
}
closeBtn.addEventListener("click", function () {
  modalHide();
  overleyHide();
});
overley.addEventListener("click", function () {
  modalHide();
  overleyHide();
});
