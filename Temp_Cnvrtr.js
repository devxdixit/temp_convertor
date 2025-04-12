document.getElementById("convert-btn").addEventListener("click", function () {
    const tempInput = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultElement = document.getElementById("cnvrtd_temp");
  
    // Validate input
    if (isNaN(tempInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    const temperature = parseFloat(tempInput);
    let convertedTemp;
  
    // Convert from the selected unit to Celsius first
    let celsiusTemp;
    switch (fromUnit) {
      case "celsius":
        celsiusTemp = temperature;
        break;
      case "fahrenheit":
        celsiusTemp = (temperature - 32) * (5 / 9);
        break;
      case "kelvin":
        celsiusTemp = temperature - 273.15;
        break;
    }
  
    // Convert from Celsius to the target unit
    switch (toUnit) {
      case "celsius":
        convertedTemp = celsiusTemp;
        break;
      case "fahrenheit":
        convertedTemp = (celsiusTemp * (9 / 5)) + 32;
        break;
      case "kelvin":
        convertedTemp = celsiusTemp + 273.15;
        break;
    }
  
    // Display the result
    resultElement.textContent = `${convertedTemp.toFixed(2)} ${toUnit === "celsius" ? "°C" : toUnit === "fahrenheit" ? "°F" : "K"}`;
  });