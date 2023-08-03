function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const unitSelection = document.getElementById("unitSelection").value;
  let convertedTemperature = "";

  if (unitSelection === "celsius") {
    // Convert to Fahrenheit
    convertedTemperature = (temperatureInput * 9) / 5 + 32;
  } else if (unitSelection === "fahrenheit") {
    // Convert to Celsius
    convertedTemperature = ((temperatureInput - 32) * 5) / 9;
  } else if (unitSelection === "kelvin") {
    // Convert to Kelvin
    convertedTemperature = temperatureInput + 273.15;
  }

  document.getElementById(
    "result"
  ).innerText = `Converted Temperature: ${convertedTemperature.toFixed(
    2
  )} ${unitSelection.toUpperCase()}`;
}
