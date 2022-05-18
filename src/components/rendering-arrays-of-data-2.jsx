import React from "react";

const EditUserForms = () => {

    const users = [
        { username: "Fred", age: 22 },
        { username: "Bob", age: 25 },
        { username: "Sarah", age: 23 }
    ]

    const styles = {
        "display": "block"
    }

    const userToEditForm = user => (
        <form key={user.username}>
            <h3>{user.username} | Edit profile</h3>
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" style={styles} defaultValue={user.age} />
        </form>
    );

    /* Each user is mapped to a form element */
    const userEditForms = users.map(userToEditForm);

    return (
        <div>
            {userEditForms}
        </div>
    )
}

export default EditUserForms;