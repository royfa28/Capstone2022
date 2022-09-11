import { createContext, useContext, useState } from "react";

const accountCxt = createContext();
export const useMyAccountContext = () => useContext(accountCxt);

function AccountContext(props) {
    const [changePersonalDetails, setChangePersonalDetails] = useState(false);
    const [changeContactDetails, setChangeContactDetails] = useState(false);

    const setPersonalDetails = {

    }

    const setContactDetails = {
        
    }
    const Values = {

    }
    return (
        <accountCxt.Provider value={Values}>
            {props.children}
        </accountCxt.Provider>
    );
}

export default AccountContext