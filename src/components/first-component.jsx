import React from 'react';

// Components in React
// - function components (prefer)
// - class components

// A component represents some HTML and JS encapsulated together
// - we can then render the components in the DOM
// - components are written using a special syntax called JSX

// Function components
// Must return one of the following:
// - a native HTML element or a custom component defined in React
// - null or false to indicate that the component should not be rendered
function MyFirstComponent() {

    // to make this into a function component, we must return one of the above specified values
    // - we specify the returned HTML and JS inside parenthesis
    return (
        <div>
            <h1>Hello world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, temporibus!</p>
        </div>
    );
}

// ES6 export
export default MyFirstComponent;