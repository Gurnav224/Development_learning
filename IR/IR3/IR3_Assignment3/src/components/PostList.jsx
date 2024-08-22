/* eslint-disable react/prop-types */
import{ Link} from "react-router-dom"

const PostList = ({posts}) => {


  return (
    <>
    
    <h3 className="py-3">Posts</h3>

    <ul className="list-group ">
      {
        posts.map((post)=>(
            <li className="list-group-item  d-flex flex-column" key={post.id} >
            <h5>
            <Link className="link-underline-primary" to={`/users/${post.username}`}>{post.username}</Link>

            </h5>
                <img src={post.imgUrl} alt="post img"  className="rounded w-50 "/>
                <p className="py-2 fs-3 fw-light ">{post.content}</p>
                
                            </li>
        ))
      }
    </ul>
    </>

  )
}

export default PostList
