import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main className="container py-4">
    <h1 className="display-3">Latest Listing</h1>
    <section>
    <img src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg" alt="latest listing 1" className="img-fluid rounded"  />
      <div className="py-3">
        <h3>Cozy Loft in the City Center</h3>
        <p>Entire loft - 2 Guests - 1 bedroom - 1 bed - 1 bath</p>
        <p className="lh-3" >Enjoy your stay in this style loft apartment located in the heart of th city. Close to restaurants, shops, and attractions, it's the perfect base for exploring the city  </p>
      </div>
    </section>
    <section>
      <img src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg" alt="latest listing 2" className="img-fluid rounded" />
      <div className="py-3">
        <h3>Beach Villa With Stunning Views</h3>
        <p>Entire Villa - 6 guests - 3 bedrooms - 3 beds - 2 baths</p>
        <p className="lh-3">Relax and urwind in this beautiful beachfront villa. Wake up to ocean, take a dip in the private pool, and enjoy seamless indoor-outdoor livng</p>
        <p className="lh-3">$300 per night</p>
      </div>
    </section>
    </main>
  );
};

export default App;
