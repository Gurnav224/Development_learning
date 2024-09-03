import Footer from "../components/Footer";
import Header from "../components/Header";

const Report = () => {
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="my-2">Team Performance Report</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h2>Top Scorer</h2>
            <p>Name: Lionel Messi</p>
            <p>Goals Scored: 24</p>
          </div>
          <div className="col-md-4">
            <h2>Best Assister</h2>
            <p>Name: Neymar jr</p>
            <p>Assists: 15</p>
          </div>
          <div className="col-md-4">
            <h2>Most Valuable Player (MVP)</h2>
            <p>Name: Christano Ronaldo</p>
            <p>Overall Rating: 9.5</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Report;
