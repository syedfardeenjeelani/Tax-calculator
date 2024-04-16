// FORMULA FOR THE CALCULATOR

/*- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs */

//all inputs / buttons / icons
let grossIncomeInput = document.getElementById("grossIncome");
let extraIncomeInput = document.getElementById("extraIncome");
let ageGroupSelect = document.getElementById("select");
let applicableDeductionsInput = document.getElementById("applicableDecutions");
let taxInfo = document.getElementById("taxinfo");
let pTaxInfo = document.getElementById("ptaxinfo");
const close = document.getElementById("close");
const taxx = document.getElementById("tax");
const income = document.getElementById("income");
const oneError = document.querySelector(".one");
const modal = document.getElementById("myModal");
const twoError = document.querySelector(".two");
const threeError = document.querySelector(".three");
const fourError = document.querySelector(".four");

const submitBtn = document.getElementById("btn");

// function to validate input

const validateInput = (input, errorElement) => {
  const value = Number(input.value);
  const isEmpty = input.value === " " || value <= -1 || input.value === "";
  if (isNaN(value) || isEmpty) {
    input.classList.add("border");
    errorElement.classList.remove("hidden");
    return false;
  } else {
    input.classList.remove("border");
    errorElement.classList.add("hidden");
    return true;
  }
};

// hiding all errors in the beginning
oneError.classList.add("hidden");
twoError.classList.add("hidden");
threeError.classList.add("hidden");
fourError.classList.add("hidden");

// adding event listener to submit button this function has the main functionality of the code

submitBtn.addEventListener("click", function () {
  const isValid = [
    validateInput(grossIncomeInput, oneError),
    validateInput(extraIncomeInput, twoError),
    validateInput(ageGroupSelect, threeError),
    validateInput(applicableDeductionsInput, fourError),
  ].every((valid) => valid);

  if (isValid) {
    // testing section //

    /* grossIncomeInput.classList.remove("border");
    oneError.classList.add("hidden");
    console.log("1");  //test

    extraIncomeInput.classList.remove("border");
    twoError.classList.add("hidden");

     console.log("2");  //test

    ageGroupSelect.classList.remove("border");
    threeError.classList.add("hidden");

     console.log("3");  //test

    applicableDeductionsInput.classList.remove("border");
    fourError.classList.add("hidden");

     console.log("4");  //test */

    const grossIncome = parseFloat(grossIncomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value);
    const applicableDeductions = parseFloat(applicableDeductionsInput.value);
    const selectedAgeGroup = ageGroupSelect.value;

    //test console.log(selectedAgeGroup); //test

    const totalIncome = grossIncome + extraIncome - applicableDeductions;
    // console.log(grossIncome, extraIncome, applicableDeductions);             //cheking if input values are correct
    // console.log(totalIncome);                                               // checking if totalIncome value is correct

    let tax = 0;
    if (totalIncome > 800000) {
      if (selectedAgeGroup === "40") {
        tax = (totalIncome - 800000) * 0.3;
      } else if (selectedAgeGroup === "50") {
        tax = (totalIncome - 800000) * 0.4;
      } else if (selectedAgeGroup <= "60") {
        tax = (totalIncome - 800000) * 0.1;
      }
    } else {
      totalIncome;
      console.log(totalIncome);
    }

    modal.style.display = "block";

    if (totalIncome <= 0) {
      income.textContent = "";
      taxx.textContent = "";
      taxInfo.textContent =
        "Total applicable deductions must be lower than gross annual income + extra income";
      pTaxInfo.textContent = "";
    } else {
      taxInfo.textContent = "Your overall income will be";
      pTaxInfo.textContent = "";
      income.textContent = `Total income:₹${totalIncome.toLocaleString(
        "en-IN"
      )}`;
      taxx.textContent = `Tax deducted:₹${tax.toLocaleString("en-IN")}`;
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        grossIncomeInput.value = "";
        extraIncomeInput.value = "";
        ageGroupSelect.value = "";
        applicableDeductionsInput.value = "";
      }
    };

    console.log(`Your total tax is: ₹${tax.toFixed(2)}`); // used tofixed(2) because it only shows 2 digits after .  " example 123.45 || 27.39"
  }
});

// GETTING BACK TO THE INITIAL STATE  ( RESTARTED )

close.addEventListener("click", function () {
  modal.style.display = "none";
  grossIncomeInput.value = "";
  extraIncomeInput.value = "";
  ageGroupSelect.value = "";
  applicableDeductionsInput.value = "";
});

// THIS IS ALTERNATIVE WAY FOR THE HOVER IN CSS FOR MOBILE DEVEICES

let grossIncomeIcons = document.querySelectorAll(".show");
// Add touchstart event listener to each show icon
grossIncomeIcons.forEach(function (icon) {
  icon.addEventListener("touchstart", function () {
    // Show the info div on touchstart
    let info = this.querySelector(".info");
    info.style.display = "flex";
  });

  // Add touchend event listener to each show icon
  icon.addEventListener("touchend", function () {
    // Hide the info div on touchend
    let info = this.querySelector(".info");
    info.style.display = "none";
  });
});
