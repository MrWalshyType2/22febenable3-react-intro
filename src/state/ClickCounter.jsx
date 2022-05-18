import React, { useState } from 'react';

// useState allows us to add dynamic/mutable data to our components
// that will persist between rerenders

const ClickCounter = () => {

    // Array destructuring
    const [count, setCount] = useState(0); 
    // useState returns an array of values, we are destructuring the value into count, and
    // a mutator function for setting that count into setCount

    // useState(initialValue) - accepts an initial value

    // function for incrementing the count
    // - react batches updates to the dom, so updates are often asynchronous
    //   for this reason, we cannot directly modify count. We should use setCount
    //   if we need the previous state to calculate the next state of the component
    const incrementCount = () => setCount(count + 1);

    return (
        <div>
            {/* We can use variables declared as state just like props */}
            <p>Clicked: {count}</p>
            <button onClick={incrementCount}>Click me</button>
        </div>
    )
}

export default ClickCounter;