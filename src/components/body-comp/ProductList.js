import React from 'react';
import { useParams } from "react-router-dom";

export default function ProductList() {

    let params = useParams();
    console.log(params);

  return (
    <div>
      Console type is {params.consoleType}
    </div>
  )
}