import Footer from "../components/Footer"
import Header from "../components/Header"

const Report = () => {
   
 

  return (
    <>
     <Header/>
     <main className="container">
     <h1 className="my-2">Health Report</h1>
     <hr />
    <div className="row">
      <div className="col-md-4">
        <h2>Weight Loss Progress</h2>
        <p>Current Weight: 180 lbs</p>
        <p>Starting Weight: 200 lbs</p>
        <p>Weight loss: 20 lbs</p>
      </div>
       <div className="col-md-4">
        <h2>Exercie Goals</h2>
        <p>Weekly Exercie Hours Goals : 5 Hours</p>
        <p>Exercise Hours This Week: 7 Hours</p>
        <p>Remaining Hours to Goal: 0 Hours</p>
       </div>
       <div className="col-md-4">
        <h2>Healthy Eating Habit</h2>
        <p>Vegetable Cosumed: 5 serving/day</p>
        <p>Fruits Cosumed: 3 serving/day</p>
        <p>Water Intake: 8 glasses/day</p>
       </div>
    </div>
     </main>
     <Footer/> 
    </>
  )
}

export default Report
