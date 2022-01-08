import React from "react";
import AddUserForm from "../AddUserForm/AddUserForm";

const AddUser = (props) => {
    return (
        <div className="add-user">
            <AddUserForm onAddUser={props.onAddUser} />
        </div>
    );
};

export default AddUser;
