const celsiusField = document.querySelector("#Celsius");
const degree = document.querySelector("#deg");
const convertBtn = document.querySelector("#convert");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

if (degree.value === "") {
    convertBtn.setAttribute("disabled", "");
    setTimeout(() => {
        convertBtn.removeAttribute('disabled');
    }, 4000);
}


convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>"
    }, 1000);
});

function convertToCelsius() {
    let inputValue = degree.value;

    setTimeout(() => {
        if (tempType.value === "Fahrenheit") {
            const CelsiusToFahrenheit = (inputValue * 9 / 5) + 32;
            celsiusField.innerHTML = `${CelsiusToFahrenheit.toFixed(2)} &deg;c`;
        } else if (tempType.value === "Kelvin") {
            const CelsiusToKelvin = (inputValue * 1) + 273.15;
            celsiusField.innerHTML = `${CelsiusToKelvin.toFixed(2)} &deg;c`;
        } else if (tempType.value === "Reaumur") {
            const CelsiusToReaumur = (inputValue * 4) / 5;
            celsiusField.innerHTML = `${CelsiusToReaumur.toFixed(2)} &deg;c`;
        } else if (tempType.value === "Rankine") {
            const CelsiusToRankine = (inputValue * 9 / 5) + 491.67;
            celsiusField.innerHTML = `${CelsiusToRankine.toFixed(2)} &deg;c`;
        }
    }, 1200)
}


