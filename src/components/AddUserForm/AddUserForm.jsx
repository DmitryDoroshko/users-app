import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";

const AddUserForm = (props) => {
    const {
        isEditing,
        idOfUserBeingEdited,
        previousUsername,
        previousAge,
        onAddUser,
        onEditUser,
    } = props;
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [editedUsername, setEditedUsername] = useState(previousUsername);
    const [editedAge, setEditedAge] = useState(previousAge);
    const [userBeingEditedNow, setUserBeingEditedNow] = useState(isEditing);

    const enteredUsernameChangeHandler = (event) => {
        if (userBeingEditedNow) {
            setEditedUsername(event.target.value);
        } else {
            setEnteredUsername(event.target.value);
        }
    };

    const enteredAgeChangeHandler = (event) => {
        if (userBeingEditedNow) {
            setEditedAge(event.target.value);
        } else {
            setEnteredAge(event.target.value);
        }
    };

    const handleButtonClick = (event) => {
        event.preventDefault();

        if (userBeingEditedNow) {
            onEditUser(idOfUserBeingEdited, editedUsername, editedAge);
            setEditedUsername("");
            setEditedAge("");
        } else {
            onAddUser(enteredUsername, enteredAge);
            setEnteredUsername("");
            setEnteredAge("");
        }
    };

    useEffect(() => {
        setUserBeingEditedNow(isEditing);
        setEditedUsername(previousUsername);
        setEditedAge(previousAge);
    }, [isEditing, previousUsername, previousAge]);

    return (
        <form className="add-user-form" onSubmit={props.onAddUser}>
            <div className="form-controls">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    className="username-input"
                    value={
                        userBeingEditedNow ? editedUsername : enteredUsername
                    }
                    onChange={enteredUsernameChangeHandler}
                />
            </div>
            <div className="form-controls">
                <label htmlFor="age">Age (years):</label>
                <input
                    type="number"
                    id="age"
                    className="age-input"
                    value={userBeingEditedNow ? editedAge : enteredAge}
                    onChange={enteredAgeChangeHandler}
                />
            </div>
            <Button
                type="submit"
                className={`btn ${
                    userBeingEditedNow ? "btn-edit" : "btn-primary"
                }`}
                onButtonClick={(event) => {
                    handleButtonClick(event);
                }}
            >
                {userBeingEditedNow ? "Edit User" : "Add User"}
            </Button>
        </form>
    );
};

export default AddUserForm;
