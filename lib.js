const caloriesUsedLabel = document.querySelector("#calories-used");
const caloriesLeftLabel = document.querySelector("#calories-left");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

export const addCalories = () => {
  // TODO: add number from inputs to the equation and to the correct date in the table
  const caloriesUsed = {};
  let totalCaloriesUsed = 0;

  for (let i = 0; i < inputs.length; i++) {
    caloriesUsed[form.elements[i].id] = parseInt(form.elements[i].value);
    totalCaloriesUsed += caloriesUsed[form.elements[i].id];
  }

  caloriesUsedLabel.textContent = totalCaloriesUsed;
  caloriesLeftLabel.textContent = 2000 - totalCaloriesUsed;
};
