import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Contact = () => {

    const [post, setPost] = useState([])
    const [update,setUpdate] = useState(false)

    useEffect(() => {
        // axios.get(baseURL).then((response) => {
        axios.get(`${baseURL}`).then((response) => {
            setPost(response.data);
            console.log("url",response.data)
        });
    }, [post.length]);

    const createPost = () => {
        axios.post(`${baseURL}`, {
            // userId: 
            title: "Hello World",
            body: "This is Create Post"
        }).then((response) =>{
            setPost(response.data);
            setUpdate(true)
            console.log("create",response.data)
            console.log("post",post)
        })
    }

    const updatePost = () => {
        axios.put(`${baseURL}/1`, {
            title: "Hello",
            body: "This is Update Post"
        }).then((response) => {
            setPost(response.data)
            setUpdate(false)
            console.log("update",response.data)
        })
    }

    const deletePost = () => {
        axios.delete(`${baseURL}/1`)
        .then(() => {
            alert("Post Deleted");
            setPost(null)
            
        })
    }

    // if (!post) return null;
   
    return (
        <>

            <div>
            
                {
                    post.map((val) =>{
                       return(
                        <>
                        <div>
                        {console.log("val.title",val.title)}
                        {console.log("val.body",val.body)}
                        <p>{val.title}</p>
                        <p>{val.body}</p>
                        </div>
                        </>
                       ) 
                    })
                }


                {/* <h1>{post.title}</h1>
                <p>{post.body}</p> */}

            
            
                {/* {
                    setUpdate ? 
                    null : <button onClick={createPost} > Create Post</button> } */}
                    <button onClick={createPost} > Create Post</button>
                {
                    update ? 
                    <button onClick={updatePost}> Update Post</button> : null
                }
                <button onClick={deletePost} > Delete Post</button>

                

            </div>
        </>
    )
}

export default Contact;