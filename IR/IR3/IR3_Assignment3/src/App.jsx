import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import PostList from "./components/PostList.jsx"


function App() {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      imgUrl: "https://placehold.co/400x200?text=Hello+World",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      username: "jane_smith",
      imgUrl: "https://placehold.co/400x200?text=Smiling+Jane",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      username: "alice_wonder",
      imgUrl: "https://placehold.co/400x200?text=Alice+In+Wonder+Park",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <>
    <Header/>
    <main className="container py-4">
    <PostList  posts={posts}/>

    </main>
    <Footer/>
    
    </>
  )
}

export default App
