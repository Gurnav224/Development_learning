import Footer from "../components/Footer"
import Header from "../components/Header"

const UserProfile = () => {
    let user = {
            fullName: "John Doe",
            bio: "Software Developer | Tech Enthusiast",
            imageUrl: "https://via.placeholder.com/250",
            followers: 1000,
            following: 500,
            posts: 50,
          }
    
  return (
    <>
     <Header/>
        <main className="container py-4">
            <div className="row">
                <div className="col-md-4">
                    <img src="https://placehold.co/300x300?text=300x300" className="rounded-circle" alt="" />
                </div>
                <div className="col-md-6 pt-3">
                        <h3>{user.fullName}</h3>
                        <p>@{user.fullName}</p>
                        <p>{user.bio}</p>
                        <p>followers: {user.followers}</p>
                        <p>following: {user.following}</p>
                        <p>Posts: {user.posts}</p>
                </div>
            </div>
        </main>
     <Footer/> 

    </>
  )
}

export default UserProfile
