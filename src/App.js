import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import ErrorModal from "./components/UI/ErrorModal/ErrorModal";
import UsersList from "./components/UsersList/UsersList";
import { initialUsers } from "./utils/initialUsers";
import { v4 as uuid4 } from "uuid";

const App = () => {
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(initialUsers);

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
        const ageValid = isAgeValid(age);

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

    return (
        <div className="app">
            {error ? <ErrorModal errorTitle={error.title} errorText={error.text} onConfirm={errorHandler} /> : ""}
            <AddUser error={error} onAddUser={addUserHandler} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
