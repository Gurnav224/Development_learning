import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header/>
    <main className="container">
    <h1 className="display-1">Overview</h1>
      <div className="py-4">
      <img className="img-fluid rounded" src="https://media.wired.com/photos/6500ad57fe61eb702d721b58/master/w_1920,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg" alt="taj mahal image" />

      </div>
      <p>Introducing the all-new Iphone-15, the latest innovations from Apple. Explore its incrediable features, Specifications , and Stunning design in this website</p>
    </main>

      <Footer/>
    </>
  )
}

export default App
