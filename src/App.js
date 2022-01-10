import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/UI/ErrorModal/ErrorModal";
import UsersList from "./components/UsersList/UsersList";
import { initialUsers } from "./utils/initialUsers";
import { v4 as uuid4 } from "uuid";

const App = () => {
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(initialUsers);
    const [isEditingUser, setIsEditingUser] = useState(false);
    const [idOfUserBeingEdited, setIdOfUserBeingEdited] = useState(-1);
    const [previousUsername, setPreviousUsername] = useState("");
    const [previousAge, setPreviousAge] = useState("");

    const errorHandler = () => {
        if (!error) {
            const errorExample = {
                title: "Something went wrong",
                text: "Please try again..."
            };
            setError(errorExample);
        }
        setError(null);
    }

    const isUsernameValid = (name) => {
        if (typeof name !== "string") {
            setError({
                title: "Invalid type of name",
                text: "Username should be of type string... Try again please"
            });
            return false;
        }

        if (name.trim().length === 0) {
            setError({
                title: "Invalid length of username",
                text: "Username length should be valid (more than 0 characters)... Try again please"
            });
            return false;
        }

        return true;
    };

    const isAgeValid = (age) => {
        if (typeof age !== "number") {
            setError({
                title: "Invalid type of age",
                text: "Age should be of type number... Try again please"
            });
            return false;
        }

        if (+age < 0) {
            setError({
                title: "Invalid age",
                text: "Age should be valid (not less than 0)... Try again please"
            });
            return false;
        }

        return true;
    }

    const addUserHandler = (name, age) => {
        const nameValid = isUsernameValid(name);
        const ageValid = isAgeValid(+age);

        if (!nameValid || !ageValid) {
            return;
        }

        const newId = uuid4();
        const newUser = {
            id: newId,
            age: age,
            username: name
        }

        setUsers(prevUsers => {
            return [...prevUsers, newUser];
        });
    };

    const userDeleteHandler = (id) => {
        if (users.findIndex(user => user.id === id) !== -1) {
            setUsers(prevUsers => {
                const updatedUsers = prevUsers.filter(user => user.id !== id);
                return updatedUsers;
            });
        }
    };

    const startUserEditing = (id, prevUsername, prevAge) => {
        setIsEditingUser(true);
        setIdOfUserBeingEdited(id);
        setPreviousUsername(prevUsername);
        setPreviousAge(prevAge);
    };

    const editUserHandler = (id, newUsername, newAge) => {

        if (!newUsername) {
            setIsEditingUser(false);
            return;
        }

        if (!newAge) {
            setIsEditingUser(false);
            return;
        }

        setIsEditingUser(false);
        setUsers(previousUsers => {
            const updatedUsers = previousUsers.map(user => {
                if (user.id === id) {
                    return { id, username: newUsername, age: +newAge };
                }
                return user;
            });

            return updatedUsers;
        });
    };

    return (
        <div className="app">
            {error ? <ErrorModal errorTitle={error.title} errorText={error.text} onConfirm={errorHandler} /> : ""}
            <AddUser error={error}
                onAddUser={addUserHandler}
                onEditUser={editUserHandler}
                isEditing={isEditingUser}
                idOfUserBeingEdited={idOfUserBeingEdited}
                previousUsername={previousUsername}
                previousAge={previousAge} />
            <UsersList users={users} onUserDelete={userDeleteHandler} onUserEdit={startUserEditing} />
        </div>
    );
}

export default App;
