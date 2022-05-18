import React from "react";
import { useState } from "react";

const EditUser = (props) => {
    
    // array destructuring
    const [email, setEmail] = useState(props.user.email); 
    const [age, setAge] = useState(props.user.age); 

    // props and state maybe updated asynchronously, do not rely on this.props or this.state 
    // for calculating the value of the next state 
    const updateAge = (event) => setAge(event.target.value); 
    const updateEmail = (event) => setEmail(event.target.value);
    
    return ( 
        <form> 
            <h3>{props.user.username} | Edit profile</h3> 
            {/* its common to see hidden fields that are used for identifying data */}
            <input type="text" htmlFor="_id" hidden defaultValue={props.user._id} /> 

            <label htmlFor="age">Age: </label> 
            <input type="number" id="age" defaultValue={age} onChange={updateAge} /> 

            <br />

            <label htmlFor="email">Email: </label> 
            <input type="email" id="email" defaultValue={email} onChange={updateEmail} /> 
        </form> 
    );
}

export default EditUser;