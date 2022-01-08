import React, { useState } from "react";
import Button from "../UI/Button/Button";

const AddUserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const enteredUsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const enteredAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const onAddUserButtonClick = (event) => {
        event.preventDefault();
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    return (
        <form className="add-user-form" onSubmit={props.onAddUser}>
            <div className="form-controls">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    className="username-input"
                    value={enteredUsername}
                    onChange={enteredUsernameChangeHandler}
                />
            </div>
            <div className="form-controls">
                <label htmlFor="age">Age (years):</label>
                <input
                    type="number"
                    id="age"
                    className="age-input"
                    value={enteredAge}
                    onChange={enteredAgeChangeHandler}
                />
            </div>
            <Button
                type="submit"
                className="btn-primary"
                onButtonClick={(event) => {
                    onAddUserButtonClick(event);
                }}
            >
                Add user
            </Button>
        </form>
    );
};

export default AddUserForm;
