import Axios from "../axios";
import { createContext, useContext, useState } from "react";

const accountCxt = createContext();
export const useMyAccountContext = () => useContext(accountCxt);

function AccountContext(props) {
    const [changePersonalDetails, setChangePersonalDetails] = useState(false);
    const [changeContactDetails, setChangeContactDetails] = useState(false);
    const [accountDetails, setAccountDetails] = useState([]);
    const [productListed, setProductListed] = useState([]);

    const updateAccount = (account) => {
        console.log(account);
        Axios({
            url: `api/updateUser/${account}`,
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            data: account,
        }).then((response) => {
            // console.log(response.data);
            window.location.reload(false);
            setAccountDetails(response.data);
        }).catch((error) => {
            console.log("Internal server error");
        })
    }

    const viewAccount = (id) => {
        Axios({
            url: `Account_Page/${id}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            // Set the accountDetails with the response taken from the GET
            setAccountDetails(response.data);
            // console.log(response.data);
        }).catch((error) => {
            console.log("Internal server error");
        });
    }

    // Get the products listed based on the email address provided
    const viewListedProducts = (userID) => {
        Axios({
            url: `Account_Page/product-listed/${userID}`,
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            // Set the productlisted with the response taken from the GET
            setProductListed(response.data);
            // console.log(response.data);
        }).catch((error) => {
            console.log("Internal server error");
        });
    }

    const Values = {
        accountDetails, changePersonalDetails, changeContactDetails, productListed,
        viewAccount, setChangePersonalDetails, setChangeContactDetails, updateAccount, viewListedProducts
    }
    return (
        <accountCxt.Provider value={Values}>
            {props.children}
        </accountCxt.Provider>
    );
}

export default AccountContext