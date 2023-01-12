import React from "react";
import { useParams, useSearchParams,useLocation } from "react-router-dom";

const PostID = () => {
    let {type, id} = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    
    // for User cart filter
    // http://localhost:3000/Post/laptop/1?price=5000&sort=asc
    
    console.log("price",searchParams.get("price"))
    console.log("sort",searchParams.get("sort"))
    
    let location = useLocation()
    console.log("location",location)

    return(
        <>
            <h1>PostID Page {type} ID {id}</h1>
            <p> Location: {location.pathname} </p>
        </>
    )
}

export default PostID;