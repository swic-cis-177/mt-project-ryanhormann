const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("input");
  console.log(inputs.length);

  const caloriesUsed = {};
  let totalCaloriesUsed = 0;
  for (let i = 0; i < inputs.length; i++) {
    caloriesUsed[e.target.elements[i].id] = parseInt(
      e.target.elements[i].value
    );
    totalCaloriesUsed += caloriesUsed[e.target.elements[i].id];
  }
  console.log(caloriesUsed);
  console.log(totalCaloriesUsed);
});
