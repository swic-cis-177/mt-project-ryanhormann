const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("input");
  console.log(inputs.length);
  const caloriesUsed = {};
  for (let i = 0; i < inputs.length; i++) {
    caloriesUsed[e.target.elements[i].id] = e.target.elements[i].value;
  }
  console.log(caloriesUsed);
});
