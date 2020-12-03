import { addCalories } from "./lib.js";

const inputs = document.querySelectorAll("input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    addCalories();
  });
}
