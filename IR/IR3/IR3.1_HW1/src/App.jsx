import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main className="container py-4">
    <h1 className="py-3">Featured Restaurants</h1>
   <section className="mb-3">
    <img src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="restaurant1" className="img-fluid rounded" width={1300}/>
  
    <div className="px-1 py-3">
      <h4>Taste Of Italy</h4>
      <p>Italian | Rating 4.5</p>
      <p className="lh-2">123 Main Street, Anytown, USA</p>
    </div>
   </section>
    
    <section className="mb-3">
    <img src="https://images.pexels.com/photos/2898205/pexels-photo-2898205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="restaurant 2" className="img-fluid rounded" width={1300} />
    <div className="px-1 py-3">
    <h2>Spice Village</h2>
    <p>Indian | Rating:4.3</p>
    <p className="lh-2">456 Elim Street, Anytown , USA</p>
    </div>

    </section>
    </main>
  );
};

export default App;
