import Axios from "axios";
import { createContext, useContext, useState } from "react";

const accountCxt = createContext();
export const useMyAccountContext = () => useContext(accountCxt);

function AccountContext(props) {
    const [changePersonalDetails, setChangePersonalDetails] = useState(false);
    const [changeContactDetails, setChangeContactDetails] = useState(false);
    const [accountDetails, setAccountDetails] = useState([]);

    const setPersonalDetails = {

    }

    const setContactDetails = {

    }

    const viewAccount = (id) => {
        console.log(id);

        Axios({
            url: `Account_Page/${id}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            // Set the accountDetails with the response taken from the GET
            setAccountDetails(response.data);
            console.log("Data has been sent to server" + id);
        }).catch((error) => {
            console.log("Internal server error");
        });
    }

    const Values = {
        accountDetails,
        viewAccount,
    }
    return (
        <accountCxt.Provider value={Values}>
            {props.children}
        </accountCxt.Provider>
    );
}

export default AccountContext