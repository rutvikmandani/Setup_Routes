import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://fir-a3aab-default-rtdb.firebaseio.com/demo.json"
});

function Base() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default Base;