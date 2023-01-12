import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const data = {
        "name" : "###"
    }

    return(
        <>
            <h1>Home</h1>
            <button onClick={() => navigate("/Default", {state:data})}> Logout </button>
        </>
    )
}

export default Home;