import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header/>
    <main className="container">
    <h1 className="display-1 pt-4">Overview</h1>
      <div className="py-4">
      <img className="img-fluid rounded" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg" alt="Virat Kholi " />

      </div>
      <p>Virat Kohli, born on November 5, 1988, in Delhi, India, is one of the world's Leading cricketers. He is Known for his aggressive batting and strong leaderships as captain of the Indian cricket team.</p>
      <p>Kohli has consistently ranked amaong the world's top batsmen and has received numerous awards and accolades for his remarkable cricketing skills.</p>
    </main>

      <Footer/>
    </>
  )
}

export default App
