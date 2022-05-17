import React from "react";

// conditional rendering
// - choosing based on some condition what we want to render

const WeatherDisplay = () => {

    let weatherWarningActive = true;
    let temp = 38;

    // we can specify branches in our code to return specific HTML
    // dependent on some conditions
    // - we cannot write if statements inside JSX
    // - we can write ternary statements inside JSX though
    const styles = {
        "color": "red"
    }

    // to use if statements, we must use them in the top level of the 
    // function component
    function weatherWarningAlert() {
        if (weatherWarningActive) {
            return <p style={styles}>Weather warning in effect - seek shelter.</p>
        }
    }
    
    // specify the jsx to be returned from the WeatherDisplay component
    return (
        <div>
            <h1>Weather forecast</h1>
            {weatherWarningAlert()}
            <p>Temperature: {temp} C</p>
        </div>
    );
}

export default WeatherDisplay;