import { createContext, useContext, useState } from "react";
import Axios from "../axios";

const loginCxt = createContext();
export const useMyLoginContext = () => useContext(loginCxt);

function LoginContext(props) {

    const [modalShow, setModalShow] = useState(false);
    const [register, setRegister] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const setModal = () => {
        setModalShow(!modalShow);
    };

    const registerStatus = () => {
        setRegister(!register);
        setError("");
    };

    const loginStatus = () => {
        setLoggedIn(!loggedIn);
    };

    // Create a new account
    const addAccount = (account) => {
        Axios({
            url: 'api/addUser',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: account
        }).then((response) => {
            registerStatus();
            console.log("Data has been sent to server" + account);
        }).catch((error) => {
            if (
                error.response && error.response.status >= 400 && error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
            console.log("Internal server error");
        });
    };

    // Check credentials with database, and create a token on succcessful login
    const loginAuth = (userAccount) => {
        Axios({
            url: 'api/auth',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: userAccount
        }).then((response) => {
            // console.log("Access token is " + response.data.accessToken);
            localStorage.setItem('token', response.data.accessToken)
            loginStatus();
            setModal();
        }).catch((error) => {
            if (
                error.response && error.response.status >= 400 && error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
            console.log("Internal server error");
        });
    }

    const Values = {
        modalShow, register, loggedIn, error,
        loginStatus, registerStatus, setModal, addAccount, loginAuth
    }

    return (
        <loginCxt.Provider value={Values}>
            {props.children}
        </loginCxt.Provider>
    );
}

export default LoginContext