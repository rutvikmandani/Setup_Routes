import React from "react";
import { useLocation } from "react-router-dom";

const Dafault = () => {
    let location = useLocation()
    console.log(location)
    return(
        <>
            <h1>Dafault</h1>
            <p> {location.state.message} </p>
            <p> {location.state.name} </p>
        </>
    )
}

export default Dafault;