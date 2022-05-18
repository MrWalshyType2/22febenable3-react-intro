import React from "react";

const TernaryWeatherDisplay = () => {

    let weatherWarningActive = false;
    let temp = 38;

    // we can specify branches in our code to return specific HTML
    // dependent on some conditions
    // - we cannot write if statements inside JSX
    // - we can write ternary statements inside JSX though
    const danger = {
        "color": "red"
    }

    const clear = {
        "color": "green"
    }

    // to use if statements, we must use them in the top level of the 
    // function component
    function weatherWarningAlert() {
        return <p style={danger}>Weather warning in effect - seek shelter.</p>
    }

    function noWarningAlert() {
        return <p style={clear}>No weather warnings in effect.</p>
    }
    
    // specify the jsx to be returned from the WeatherDisplay component
    return (
        <div>
            <h1>Weather forecast - Ternary</h1>
            {weatherWarningActive ?
                // result if true
                weatherWarningAlert()
                // you can also directly place jsx here instead of a function call
                :
                // result if false
                noWarningAlert()
            }
            <p>Temperature: {temp} C</p>
        </div>
    );
}

export default TernaryWeatherDisplay;