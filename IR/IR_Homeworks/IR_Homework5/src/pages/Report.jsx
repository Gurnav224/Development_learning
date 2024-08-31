import Footer from "../components/Footer";
import Header from "../components/Header";

const Report = () => {

  const reports = [
    {
      id:1,
      title:'Top Scorer',
      name:'Lionel Messi',
      goals:25
    },
    {
      id:2,
      title:'Best Assister',
      assists:15
    },
    { id:3,
      title:'Most Valuable Player (MVP)',
      name:'Cristiano Ronaldo',
      rating:9.5
    }
  ]
  
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="my-4">Team Performance Report</h1>
        <hr />
        
       <div className="row">
        {
          reports.map((report)=>(
            <div key={report.id} className="col-md-4">
              <h2 className="mb-4">{report.title}</h2>
              {report.name && <p><strong>Name: </strong>{report.name}</p>}
              {report.goals && <p><strong>Goals: {report.goals}</strong></p>}
              {report.assists && <p><strong>Assists: </strong> {report.assists}</p>}
              {report.rating && <p><strong>Overall Rating: </strong>{report.rating}</p>}
            </div>
          ))
        }
       </div>
      </main>
      <Footer/>
    </>
  );
};

export default Report;
