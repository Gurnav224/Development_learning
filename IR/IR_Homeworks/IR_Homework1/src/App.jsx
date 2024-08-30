import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header/>
    <main className="container">
      <div className="py-4">
      <img className="img-fluid rounded" src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg" alt="taj mahal image" />

      </div>
      <p>The Taj mahal is one of the most famous monuments in the world. It is located in Agra, India and is symbol of eternal love. This Stunning white marble masoleum was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal</p>
      <p>The Taj Mahal is not only a UNESCO World Heritage Site but also considered one of the most beautiful architectural masterpieces in history </p>
    </main>

      <Footer/>
    </>
  )
}

export default App
