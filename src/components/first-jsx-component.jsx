import React from "react";

// we can also create components using arrow functions
const DateDisplay = () => {
    // This is still just plain old javascript here
    // - because a function is an object, we can write js code inside it
    const date = new Date().toLocaleString();

    return (
        <div>
            {/* JSX only lives in the return statements with HTML
                - we can insert data using {} and also specify expressions inside them
            */}
            <p>Date: {date}</p>
        </div>
    );
}

export default DateDisplay;