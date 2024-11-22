import {useDispatch, useSelector} from "react-redux"
import { fetchPosts, likeButtonPressed } from "./postSlice";
import { useEffect } from "react";


const Posts = () => {
    const {posts , status , error} = useSelector((state) => state.posts);
    const dispatch = useDispatch();


    useEffect(()=> {
      dispatch(fetchPosts())
    },[])

  return (
    <div>
    {status === "loading" && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {
    posts.map((post) => (
     <div key={post.postId}>
        <p> {post.caption}</p>
        <button onClick={() => dispatch(likeButtonPressed(post.postId))}>Likes {post.likes}</button>
     </div>
    ))
    }
    </div>
  )
}

export default Posts
