import {useDispatch, useSelector} from "react-redux"
import { likeButtonPressed } from "./postSlice";



const Posts = () => {
    const state = useSelector((state) => state.posts);
    const dispatch = useDispatch();

  return (
    <div>
    {
    state.posts.map((post) => (
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
