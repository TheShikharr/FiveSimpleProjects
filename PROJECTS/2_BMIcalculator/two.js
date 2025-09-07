const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const calculate = document.querySelector("button")
const result = document.querySelector(".result")

calculate.addEventListener("click", () => {
     event.preventDefault(); // Stop form from refreshing the page

    const heightINnumber = Number(height.value);
    const weightINnumber = Number(weight.value);

    if(heightINnumber>0 && weightINnumber>0) {
    const bmi = (weightINnumber/(heightINnumber*heightINnumber)) * 10000;
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        result.textContent = "Please enter valid height and weight.";
    }
})