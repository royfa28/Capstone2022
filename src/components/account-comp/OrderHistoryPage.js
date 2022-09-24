import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useMyOrderContext } from "../../context/OrderContext";

export default function OrderHistoryPage() {

    let id = useParams();

    const { singleHistory, getSingleHistory } = useMyOrderContext();

    useEffect(() => {
        getSingleHistory(id.orderID);
        const interval = setInterval(() => {
            getSingleHistory(id.orderID);
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, [id.orderID]);

    return (
        <>
            {/* {console.log(id)} */}
            <div>OrderHistoryPage</div>
        </>
    )
}
