const caloriesUsedLabel = document.querySelector("#calories-used");
const caloriesLeftLabel = document.querySelector("#calories-left");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const getDayOfWeek = new Date(Date.now()).getDate();

export const addCalories = () => {
  // TODO: add number from inputs to the correct day in the table
  const caloriesUsed = {};
  let totalCaloriesUsed = 0;

  for (let i = 0; i < inputs.length; i++) {
    caloriesUsed[form.elements[i].id] = parseInt(form.elements[i].value);
    totalCaloriesUsed += caloriesUsed[form.elements[i].id];
  }

  caloriesUsedLabel.textContent = totalCaloriesUsed;
  caloriesLeftLabel.textContent = 2000 - totalCaloriesUsed;

  // if you eat more than 2000 calories, then the equation turns red
  if (caloriesLeftLabel.textContent < 0) {
    document.querySelector("#calories").style.backgroundColor = "#ff837a";
  }
};
