import React from "react";
import UserItem from "../UserItem/UserItem";

const UsersList = (props) => {
    const { users, onUserDelete, onUserEdit } = props;

    const userDeleteHandler = (id) => {
        onUserDelete(id);
    };

    const userEditHandler = (id) => {
        onUserEdit(id);
    };

    return (
        <ul className="users-list">
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    name={user.username}
                    age={user.age}
                    onUserDelete={userDeleteHandler}
                    onUserEdit={userEditHandler}
                />
            ))}
        </ul>
    );
};

export default UsersList;
