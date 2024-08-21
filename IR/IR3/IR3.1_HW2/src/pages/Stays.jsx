const Stays = () => {
  return (
    <main className="container py-4">
      <h1 className="display-1">Featured Stays</h1>
      <div className="card mb-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/18332501/pexels-photo-18332501/free-photo-of-exterior-of-an-old-cabin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3>Luxurious Taj Mahal View Apartment</h3>
              <p>
                wake up to breathtaking view of Taj Mahal from this Luxurious
                apartment. Explore the rich history and beauty of the iconic
                monument right your window
              </p>
              <small className="lh-4 text-muted">Last updated 3 min ago</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/11525305/pexels-photo-11525305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="stays 1"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3>Cozy Retreat in the Mountains</h3>
              <p>
               Escape to nature with this cozy Mountain retreat. Enjoy tranquility and Stunning views while begin surrounded by lush forests and fresh Mountain by lush forests and fresh Mountain air.
              </p>
              <small className="lh-4 text-muted">Last updated 10 min ago</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="row">
          <div className="col-md-4">
            <img

              src="https://images.pexels.com/photos/15026856/pexels-photo-15026856/free-photo-of-brown-wooden-house-surrounded-with-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="stays 2"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3>Seaside Villa with Private Beach Access</h3>
              <p>
                Indulge in luxuary with this Stunning seaside villa. Relax on pristine beaches. take a dip in the private pool and soak up the sun in the exulsive coastal retreat 
              </p>
              <small className="lh-4 text-muted">Last updated 15 min ago</small>
            </div>
          </div>
        </div>
      </div>
     
      <div className="card mb-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3>Modern Loft in the City Center</h3>
              <p>
               Experience urban living at its finest with modern loft. Conveniently located in the city center, it offer stylese , comfort and easy access to dinning and entertainment options 
              </p>
              <small className="lh-4 text-muted">Last updated 20 min ago</small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stays;
