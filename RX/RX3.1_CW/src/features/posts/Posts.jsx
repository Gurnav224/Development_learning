import {useSelector} from "react-redux"



const Posts = () => {
    const state = useSelector((state) => state.posts);

  return (
    <div>
    {
    state.posts.map((post) => (
     <div key={post.postId}>
        <p> {post.caption}</p>
        <p>Likes {post.likes}</p>
     </div>
    ))
    }
    </div>
  )
}

export default Posts
