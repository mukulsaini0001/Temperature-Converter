const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");

convertButton.addEventListener("click", function () {

    const temperatureValue = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;

    if (!isNaN(temperatureValue)) {
        let result;
        switch (selectedUnit) {
            case "celsius":
                result = temperatureValue;
                break;
            case "fahrenheit":
                result = (temperatureValue * 9/5) + 32;
                break;
            case "Kelvin":
                result = temperatureValue + 273.15;
                break;
            default:
                result = "Invalid unit";
        }

        alert(`Converted temperature: ${result} ${selectedUnit}`);
    } else {
        alert("Please enter a valid number for temperature.");
    }
});

resetButton.addEventListener("click", function () {
    temperatureInput.value = "";
    unitSelect.value = "celsius";
});
