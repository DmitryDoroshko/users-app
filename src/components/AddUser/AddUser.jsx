import React from "react";
import AddUserForm from "../AddUserForm/AddUserForm";

const AddUser = (props) => {
    const {
        onAddUser,
        onEditUser,
        isEditing,
        idOfUserBeingEdited,
        previousUsername,
        previousAge,
    } = props;

    return (
        <div className="add-user">
            <AddUserForm
                onAddUser={onAddUser}
                onEditUser={onEditUser}
                isEditing={isEditing}
                idOfUserBeingEdited={idOfUserBeingEdited}
                previousUsername={previousUsername}
                previousAge={previousAge}
            />
        </div>
    );
};

export default AddUser;
