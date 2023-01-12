import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    let {type} = useParams()
    return(
        <>
            <h1>Post Page {type}</h1>
        </>
    )
}

export default Post;