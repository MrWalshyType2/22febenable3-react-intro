import React, { useState, useEffect } from "react";

// useEffect allows us to create functions that run when a component is mounted to the dom
// and when it is unmounted
// - this examples runs only once at mount

function Users(props) {
    // hooks, including state, must be declared at the top-level of a component, i.e., not inside any nested
    // functions

    const [data, setData] = useState(null); // the list of users
    const [error, setError] = useState(null); // represents whether an error occurred and holds that error if so

    function retrieveData() {
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
    }

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

    if (error) return <h1>Error encountered loading users...</h1>;
    else return (
        <div>
            <button onClick={retrieveData}>Load users...</button>
            {data.map(user => mapUserToCard(user))}
        </div>
    );
}

export default Users;