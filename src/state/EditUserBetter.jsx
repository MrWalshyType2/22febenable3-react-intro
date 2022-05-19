import React from "react";
import { useState } from "react";

const EditUserBetter = (props) => {
    
    const [user, setUser] = useState(props.user);

    // the mutator function, setUser(), provided by useState() can be used to
    // directly set a new value, i.e., setUser(new User());
    // or
    // we can set the next state based on the previous state
    // - previousState is the user before it was updated
    const updateUser = event => setUser(previousState => {
        // ... is the spread operator, { ...previousState } is saying to spread all of the properties and values
        // in the previousState object (the user) into a new object.
        //
        // When creating an object, if we surround a property name with square brackets, we can reference
        // variables as the property name.
        //
        // Object.assign merges the two objects passed to it
        return Object.assign({ ...previousState }, 
                             { [event.target.name]: event.target.value });
                             // event.target.name is the 'name' attribute of the input field
                             // event.target.value is the value of the input field
    });
    
    return ( 
        <form> 
            <h3>{user.username} | Edit profile</h3> 
            <input type="text" htmlFor="_id" hidden defaultValue={user._id} />

            <label htmlFor="age">Age: </label> 
            <input type="number" name="age" defaultValue={user.age} onChange={updateUser} /> 
            <br />
            <label htmlFor="email">Email: </label> 
            <input type="email" name="email" defaultValue={user.email} onChange={updateUser} /> 
        </form> 
    );
}

export default EditUserBetter;