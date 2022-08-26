import { createContext, useContext, useState } from "react";

const loginCxt = createContext();
export const useMyLoginContext = () => useContext(loginCxt);

function LoginContext(props) {

    const [modalShow, setModalShow] = useState(false);
    const [register, setRegister] = useState(false);

    const showModal = () => {
        console.log("Show Modal");
        setModalShow(true);
    };

    const closeModal = () => {
        setModalShow(false);
    };

    const signin = () =>{
        setRegister(false);
    }

    const signup = () =>{
        setRegister(true);
    }

    return (
        <loginCxt.Provider value={{ modalShow, showModal, closeModal, register, signin, signup }}>
            {props.children}
        </loginCxt.Provider>
    );
}

export default LoginContext