/*** name : uzu chukubikem confidence **** */

/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let baseRate = 35; // Full day rate by default
let weeklyCost = 0;
let activeDays = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const mondayButton = document.getElementById("monday");
mondayButton.addEventListener("click", toggleMonday);

const tuesdayButton = document.getElementById("tuesday");
tuesdayButton.addEventListener("click", toggleTuesday);

const wednesdayButton = document.getElementById("wednesday");
wednesdayButton.addEventListener("click", toggleWednesday);

const thursdayButton = document.getElementById("thursday");
thursdayButton.addEventListener("click", toggleThursday);

const fridayButton = document.getElementById("friday");
fridayButton.addEventListener("click", toggleFriday);

function toggleMonday() {
    mondayButton.classList.toggle("clicked");
    updateCost();
}

function toggleTuesday() {
    tuesdayButton.classList.toggle("clicked");
    updateCost();
}

function toggleWednesday() {
    wednesdayButton.classList.toggle("clicked");
    updateCost();
}

function toggleThursday() {
    thursdayButton.classList.toggle("clicked");
    updateCost();
}

function toggleFriday() {
    fridayButton.classList.toggle("clicked");
    updateCost();
}

function countActiveDays() {
    activeDays = 0;
    if (mondayButton.classList.contains("clicked")) activeDays++;
    if (tuesdayButton.classList.contains("clicked")) activeDays++;
    if (wednesdayButton.classList.contains("clicked")) activeDays++;
    if (thursdayButton.classList.contains("clicked")) activeDays++;
    if (fridayButton.classList.contains("clicked")) activeDays++;
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearSelections);

function clearSelections() {
    weeklyCost = 0;
    activeDays = 0;
    displayCost.innerHTML = weeklyCost;
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
const halfDayRateButton = document.getElementById("half");
halfDayRateButton.addEventListener("click", setHalfDayRate);

const fullDayRateButton = document.getElementById("full");
fullDayRateButton.addEventListener("click", setFullDayRate);

function setHalfDayRate() {
    baseRate = 20;
    halfDayRateButton.classList.add("clicked");
    fullDayRateButton.classList.remove("clicked");
    updateCost();
}

function setFullDayRate() {
    baseRate = 35;
    halfDayRateButton.classList.remove("clicked");
    fullDayRateButton.classList.add("clicked");
    updateCost();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const displayCost = document.getElementById("calculated-cost");

function updateCost() {
    countActiveDays();
    weeklyCost = activeDays * baseRate;
    displayCost.innerHTML = weeklyCost;
}
