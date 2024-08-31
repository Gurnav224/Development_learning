import Header from "../components/Header";

const Report = () => {

  const reports = [
    {
      id:1,
      heading:'Top Scorer',
      name:'Player 1',
      runs:12000
    },
    {
      id:2,
      heading:'Best Bowler',
      name:'Player 2',
      wickets:500
    }
  ]
  
  return (
    <>
      <Header />
      <main className="container">
        <h1 className="my-4">Player Report</h1>
        <hr />
        
       <div className="row">
        {
          reports.map((report)=>(
            <div key={report.id} className="col-md-6 mb-3">
              <div className="card">
                <div className="card-header">
                  <h2>{report.heading}</h2>
                </div>
                <div className="card-body">
                  <p><strong>Name: {report.name}</strong></p>
                  {report.runs && <p><strong>Name: </strong>Total Runs: {report.runs}</p>}
                  {report.wickets && <p><strong>Total Wickets: </strong>{report.wickets}</p>}
                </div>
              </div>            
            </div>
          ))
        }
       </div>
      </main>
    </>
  );
};

export default Report;
