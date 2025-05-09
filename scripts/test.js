/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

// Create variables
document.addEventListener("DOMContentLoaded", () => {
  const days = document.querySelectorAll(".day-selector li");
  const fullDayButton = document.getElementById("full");
  const halfDayButton = document.getElementById("half");
  const calculatedCost = document.getElementById("calculated-cost");
  const clearButton = document.getElementById("clear-button");

  let selectedDays = [];
  let dailyRate = 35; // Initial rate for a full day

  /********* colour change days of week *********/
  // when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
  // added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

  // Colour change days of week
  days.forEach((day) => {
    day.addEventListener("click", () => {
      if (day.classList.contains("clicked")) {
        selectedDays = selectedDays.filter((d) => d !== day.id);
        day.classList.remove("clicked");
      } else {
        selectedDays.push(day.id);
        day.classList.add("clicked");
      }
      calculateCost();
    });
  });

  /********* clear days *********/
  // when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

  // Clear days
  clearButton.addEventListener("click", () => {
    selectedDays = [];
    days.forEach((day) => day.classList.remove("clicked"));
    calculateCost();
  });

  /********* change rate *********/
  // when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

  /********* change rate *********/

  // Change rate
  halfDayButton.addEventListener("click", () => {
    dailyRate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateCost();
  });

  // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

  fullDayButton.addEventListener("click", () => {
    dailyRate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateCost();
  });

  /********* calculate *********/
  // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

  // Calculate
  function calculateCost() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCost.innerHTML = totalCost;
  }
});
