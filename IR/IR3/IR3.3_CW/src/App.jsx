import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
   <Header/>
    <main className="container py-4">
      <h1>Latest Blogs</h1>
      <article className="card my-3">
        <img
          className="card-img-top rounded"
          src="https://placehold.co/500x200?text=blog1"
          alt="blog1"
        />
        <div className="card-body">
          <p>Posted on February 22, 2024 by John Doe</p>

          <h2>Blog 1</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </article>
      <article className="card my-3">
        <img
          className="card-img-top rounded"
          src="https://placehold.co/500x200?text=blog2"
          alt="blog2"
        />
        <div className="card-body">
          <h2>Blog 2</h2>
          <p>Posted on February 18, 2024 by Jane Smith</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's sta      ndard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </article>
    </main>
    <Footer/>
    </>

  );
};

export default App;
