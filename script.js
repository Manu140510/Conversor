function convertTemperature(unit, value) {
    value = parseFloat(value)

    const celsiusinput = document.getElementById ('celsius');
    const fahrenheitnput = document.getElementById ('fahrenheit');
    const kelvininput = document.getElementById ('kelvin');

    if (unit === 'celsius'){
        if (!isNaN(value)){
            fahrenheitnput.value = (value * 9/5) + 32;
            kelvininput.value = value + 273.15;
        } else{
            fahrenheitnput.value ='';
            kelvininput.value ='';
        }
    }

    if (unit === 'fahrenheit'){
        if (!isNaN(value)){
            celsiusinput.value = (value - 32) * 5/9;
            kelvininput.value = ((value - 32) * 5/9) + 273.15;
        } else{
            celsiusinput.value = '';
            kelvininput.value = '';
        }
    }

    if (unit === 'kelvin'){
        if (!isNaN(value)){
            celsiusinput.value = value - 273.15;
            fahrenheitnput.value = ((value - 273.15) * 9/5) + 32;
        } else{
            celsiusinput.value = '';
            fahrenheitnput.value = '';
        }
    }
}