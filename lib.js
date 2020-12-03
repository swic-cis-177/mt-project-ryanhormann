const caloriesUsedLabel = document.querySelector("#calories-used");
const caloriesLeftLabel = document.querySelector("#calories-left");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const tds = document.querySelectorAll("td");
const totalLabel = document.querySelector("#totalLabel");

// I added 1 to this so that it starts with monday, so monday has a value of 1, tuesday has a value of 2, etc.
const getDayOfWeek = new Date(Date.now()).getDate() + 1;

export const addCalories = () => {
  const caloriesUsed = {};
  let totalCaloriesUsed = 0;

  for (let i = 0; i < inputs.length; i++) {
    caloriesUsed[form.elements[i].id] = parseInt(form.elements[i].value);
    totalCaloriesUsed += caloriesUsed[form.elements[i].id];
  }

  caloriesUsedLabel.textContent = totalCaloriesUsed;
  caloriesLeftLabel.textContent = 2000 - totalCaloriesUsed;

  // Turn equation red if you eat more than 2k cal
  if (caloriesLeftLabel.textContent < 0) {
    document.querySelector("#calories").style.backgroundColor = "#ff837a";
  } else {
    document.querySelector("#calories").style.backgroundColor = "#f7f7f7";
  }

  switch (getDayOfWeek) {
    case 1:
      tds[0].textContent = totalCaloriesUsed;
      break;
    case 2:
      tds[1].textContent = totalCaloriesUsed;
      break;
    case 3:
      tds[2].textContent = totalCaloriesUsed;
      break;
    case 4:
      tds[3].textContent = totalCaloriesUsed;
      break;
    case 5:
      tds[4].textContent = totalCaloriesUsed;
      break;
    case 6:
      tds[5].textContent = totalCaloriesUsed;
      break;
    case 7:
      tds[6].textContent = totalCaloriesUsed;
      break;
  }

  // TODO do total and average and display in labels.
  const weeklyTotal = [];

  for (let x = 0; x < tds.length; x++) {
    weeklyTotal.push(tds[x].textContent);
  }

  const totalCal = weeklyTotal.reduce(
    (total, current) => total + Number(current),
    0
  );

  totalLabel.textContent = `Weekly Total: ${totalCal}`;
};
