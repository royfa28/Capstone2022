import { createContext, useContext, useState } from "react";

const accountCxt = createContext();
export const useMyAccountContext = () => useContext(accountCxt);

function AccountContext(props) {
    const [accountNav, setAccountNav] = useState(false);

    const setNav =() =>{
        setAccountNav(!accountNav);
    }

    return (
        <accountCxt.Provider value={{ accountNav, setNav }}>
            {props.childre}
        </accountCxt.Provider>
    );
}

export default AccountContext