// Higher-order function to return a conversion function
function createConversionFunction(fromUnit, toUnit) {
    const conversions = {
        'kg-lb': (value) => value * 2.20462,
        'lb-kg': (value) => value / 2.20462,
        'km-mi': (value) => value * 0.621371,
        'mi-km': (value) => value / 0.621371,
        'c-f': (value) => (value * 9 / 5) + 32,
        'f-c': (value) => (value - 32) * 5 / 9,
    };

    return (input) => {
        if (Array.isArray(input)) {
            return input.map(conversions[`${fromUnit}-${toUnit}`]);
        } else {
            return conversions[`${fromUnit}-${toUnit}`](input);
        }
    };
}

// Convert Weight
function convertWeight() {
    const value = document.getElementById('weightValue').value;
    const unit = document.getElementById('weightUnit').value;
    const [fromUnit, toUnit] = unit.split('-');
    const converter = createConversionFunction(fromUnit, toUnit);

    let result;
    if (value.includes(',')) {
        const valuesArray = value.split(',').map(Number);
        result = converter(valuesArray).join(', ');
    } else {
        result = converter(parseFloat(value));
    }

    document.getElementById('weightResult').innerText = `Converted Value: ${result}`;
}

// Convert Distance
function convertDistance() {
    const value = document.getElementById('distanceValue').value;
    const unit = document.getElementById('distanceUnit').value;
    const [fromUnit, toUnit] = unit.split('-');
    const converter = createConversionFunction(fromUnit, toUnit);

    let result;
    if (value.includes(',')) {
        const valuesArray = value.split(',').map(Number);
        result = converter(valuesArray).join(', ');
    } else {
        result = converter(parseFloat(value));
    }

    document.getElementById('distanceResult').innerText = `Converted Value: ${result}`;
}

// Convert Temperature
function convertTemperature() {
    const value = document.getElementById('temperatureValue').value;
    const unit = document.getElementById('temperatureUnit').value;
    const [fromUnit, toUnit] = unit.split('-');
    const converter = createConversionFunction(fromUnit, toUnit);

    let result;
    if (value.includes(',')) {
        const valuesArray = value.split(',').map(Number);
        result = converter(valuesArray).join(', ');
    } else {
        result = converter(parseFloat(value));
    }

    document.getElementById('temperatureResult').innerText = `Converted Value: ${result}`;
}
