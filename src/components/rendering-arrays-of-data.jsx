import React from "react";

const UsernameList = () => {

    const users = [
        { username: "Fred", age: 22 },
        { username: "Bob", age: 25 },
        { username: "Sarah", age: 23 }
    ]

    // each user is mapped to an li
    // - bad practice to use indexes, done here for the example
    const userToListItem = (user, index) => <li key={index}>{user.username}</li>;

    const usernameList = users.map(userToListItem);

    return (
        <div>
            <h2>Usernames</h2>
            <ul>
                {usernameList}
            </ul> 
        </div>
    );
}

export default UsernameList;