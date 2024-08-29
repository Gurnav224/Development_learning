import { useState } from "react"

const Feedback = () => {

  const [selctedFeedbackType , setSelectedFeedbackType] = useState("")
  const [feedbackResponse , setFeedbackResponse] = useState("")
  const [formState  , setFormState] = useState(false)


  const feedbackOptionChangeHandler= (event)=>{
    setSelectedFeedbackType(event.target.value)
    setFeedbackResponse("")
    setFormState(false)
  }

  const handleFormSubmit = (event) =>{
 event.preventDefault()
 if(!feedbackResponse){
    alert('Please give some feeback response');
    return 
 }
 
  setFormState(true)
  }

  return (
    <div>

      <h1>Feedback Form</h1>

      <form onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="feedback-type">Feedback Type: </label>
            <select onChange={feedbackOptionChangeHandler} name="feedback-type" id="feedback-type">
                <option value="">Select Feeback  Type</option>
                <option value="Compliment">Compliment</option>
                <option value="Complaint">Complaint</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Others">Others</option>
            </select>
        </div>
        <div> 

        {
            selctedFeedbackType    && (
                <div>
                    <label htmlFor="">Comments: </label>
                    <br />
                    <textarea value={feedbackResponse} onChange={(event)=>setFeedbackResponse(event.target.value)} name="" id="" cols="50" rows="10"></textarea>
                </div>
            )
        }

        <button type="submit">Submit</button>
     
    </div>
    </form>
      {
        formState && (
            <>
            <p>{selctedFeedbackType}</p>
            <p>{feedbackResponse}</p>
            </>

        )
      }
    </div>
      
  )
}

export default Feedback
