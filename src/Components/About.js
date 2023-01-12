import axios from "axios";
import React, { useState, useEffect } from "react";

// const client = axios.create ({
//     baseURL: "https://fir-a3aab-default-rtdb.firebaseio.com/"
// })

const About = () => {

    const [detail, setDetail] = useState()

    const firebase = async () => {

        const res = await fetch(
            "https://fir-a3aab-default-rtdb.firebaseio.com/demo.json",
            {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },  
                body: JSON.stringify({
                    name: "Rutvik",
                    lasname: "Mandani"
                })
            }
        )
    }

    const display = () => {

        axios.get("/demo.json")
            .then((responce) => {
                setDetail(responce.data)
                console.log("data", responce.data)
            })
    }

    ////////////////
    //     // axios.get(baseURL).then((response) => {
    //     axios.get(`${baseURL}`).then((response) => {
    //         setPost(response.data);
    //         console.log("url",response.data)
    //     });
    // }, []);    


    // const detail = {
    //     name: "Rutvik",
    //     lastname: "Mandani"
    // }

    // axios.get('/detail.json', detail)
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))

    return (
        <>
            <h1>About</h1>
            <button onClick={firebase}> Click Me!</button>

            <button onClick={display}>Display</button>
            {detail}
        </>
    )
}

export default About;