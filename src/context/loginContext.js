import { createContext, useContext, useState } from "react";

const loginCxt = createContext();
export const useMyLoginContext = () => useContext(loginCxt);

function LoginContext(props) {

    const [modalShow, setModalShow] = useState(false);
    const [register, setRegister] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const setModal = () => {
        setModalShow(!modalShow);
    }

    const registerStatus = () => {
        // console.log("Register status " + register);
        setRegister(!register);
    }

    const loginStatus = () => {
        setLoggedIn(!loggedIn);
        // console.log("Login status " + loggedIn);
    }

    return (
        <loginCxt.Provider value={{ modalShow, register, loggedIn, loginStatus, registerStatus, setModal }}>
            {props.children}
        </loginCxt.Provider>
    );
}

export default LoginContext