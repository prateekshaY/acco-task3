
import React, { useEffect, useState } from 'react';

const Posts=()=>{


  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await postRes.json();
    return data;
  }

  useEffect(() => {
    getPosts().then(data => {
        setPosts(data);
    });
  }, [])

  return (
    <>
    
    <h2>Posts List</h2>
    <div>
        <table className="table table-bordered" >
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post,index)=>
        <>
        <tr key={index}>
          <td>{post.title}</td>
          <td >{post.body}</td>
        </tr>
        </>
        )}
      </tbody>

    </table>
    </div>
    </>

  )
}

export default Posts;