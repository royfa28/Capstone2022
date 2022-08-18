import { createContext, useContext, useState } from "react";
import LoginModal from "../components/login-comp/Login";

const myCtx = createContext();
export const useMyCtxProvider = () => useContext(myCtx);

function Mycontext(props) {

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
        <myCtx.Provider value={{ modalShow, showModal, closeModal, register, signin, signup }}>
            {props.children}
        </myCtx.Provider>
    );
}

export default Mycontext