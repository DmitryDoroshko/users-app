import React from "react";
import Button from "../UI/Button/Button";

const UserItem = (props) => {
    const { id, name, age, onUserEdit, onUserDelete } = props;

    const userDeleteHandler = () => {
        onUserDelete(id);
    };

    const userEditHandler = () => {
        onUserEdit(id, name, age);
    };

    return (
        <li className="users-item">
            <div className="users-info">
                User: {name}, Age: {age} (years)
            </div>
            <div className="users-buttons">
                <Button
                    type="button"
                    className="btn-edit"
                    onButtonClick={userEditHandler}
                >
                    Edit
                </Button>
                <Button
                    type="button"
                    className="btn-delete"
                    onButtonClick={userDeleteHandler}
                >
                    Delete
                </Button>
            </div>
        </li>
    );
};

export default UserItem;
