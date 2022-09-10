import { createContext, useContext, useState } from "react";
import Axios from "axios";

const loginCxt = createContext();
export const useMyLoginContext = () => useContext(loginCxt);

function LoginContext(props) {

    const [modalShow, setModalShow] = useState(false);
    const [register, setRegister] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [account, setAccount] = useState([]);

    const setModal = () => {
        setModalShow(!modalShow);
    };

    const registerStatus = () => {
        // console.log("Register status " + register);
        setRegister(!register);
    };

    const loginStatus = () => {
        setLoggedIn(!loggedIn);
        // console.log("Login status " + loggedIn);
    };

    const addAccount = (account) => {
        console.log(account);

        Axios({
            url: 'add_user',
            method: 'POST',
            data: account
        }).then(() => {
            console.log("Data has been sent to server" + account);
        }).catch(() => {
            console.log("Internal server error");
        });
    };

    const Values = {
        modalShow, register, loggedIn, account,
        loginStatus, registerStatus, setModal, addAccount
    }

    return (
        <loginCxt.Provider value={Values}>
            {props.children}
        </loginCxt.Provider>
    );
}

export default LoginContext