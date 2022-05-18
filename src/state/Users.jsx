import React, { useState, useEffect } from "react";

// useEffect allows us to create functions that run when a component is mounted to the dom
// and when it is unmounted
// - this examples runs only once at mount

function Users(props) {
    // hooks, including state, must be declared at the top-level of a component, i.e., not inside any nested
    // functions

    const [data, setData] = useState(null); // the list of users
    const [error, setError] = useState(null); // represents whether an error occurred and holds that error if so
    const [loading, setLoading] = useState(true); // represents whether the data is still being loaded or not

    // transforming a user object to a div with nested elements
    const mapUserToCard = (user) => {
        return (
            // We have to include a key here because of when we render it, we call data.map() to trigger this function
            <div key={user.username}>
                <h2>{user.name} ({user.username})</h2>
                <h3>Contact details</h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
        );
    }

    // useEffect is a hook for performing side effects, such as network communication or file io
    // - if a function, given the same data, does not return the same result every time, it is said to have side effects
    // - a pure function, amongst other things, does not have side effects. If we pass it the same data multiple times, it always returns the
    //   the same result
    // - useEffect hooks into component mounting and unmounting
    //   - by default, useEffect will be triggered on every change to state
    //   - the first argument is a callback representing the behaviour we want to carry out
    //   - pass it an empty array as the second argument to only run it on mounting
    useEffect(() => {
        // fetch data from api
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok) return response.json();
                throw response;
            })
            .then(data => setData(data))
            .catch(error => {
                console.error(error);
                setError(error)
            })
            .finally(() => setLoading(false))
    }, []); // prevent effect from rerunning on every render, causes an infinite loop if no empty array specified

    if (loading) return <h1>Loading users...</h1>;
    else if (error) return <h1>Error encountered loading users...</h1>;
    else return (
        <div>
            {data.map(user => mapUserToCard(user))}
        </div>
    );
}

export default Users;