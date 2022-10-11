import { useState, useEffect } from "react";
import { fetchPosts} from "./service/api";
const LOCAL_STORAGE_KEY = "post-list";
const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
            .then(result => {
                setPosts(result);
            });

    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);


    return(
         <div className="posts">
           {posts.map(post => 
                <div key={post.id}>{post.body}</div>
           )}
        </div>
    )
}

export default PostsPage;