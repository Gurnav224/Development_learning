import Header from "../components/Header";

const Report = () => {
  const reports = [
    {
      title: "Most Worked Employee",
      name: "Jane Doe",
      hoursWorked: 210,
    },
    {
      title: "Highest Rated Employee",
      name: "Jane Smith",
      performance: "0.095",
    },
    {
      title: "Total Overtime Hours",
      totalOverTime: 35,
    },
  ];
  return (
    <>
      <Header />
      <main className="container">
        <h1>HR Report</h1>
        <hr />
        <div className="row">
          {reports.map((report, index) => (
            <div key={index} className="col-md-4">
              <h3>{report.title}</h3>
              {report.name && <p>Name: {report.name}</p>}
              {report.hoursWorked && <p>Hours Worked: {report.hoursWorked}</p>}
              {report.performance && <p>Performance Rate: {report.performance}</p>}
              {report.totalOverTime && (
                <p>Total Over Time: {report.totalOverTime}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Report;
