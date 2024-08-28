import { useState } from "react"

const App = () => {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [plan , setPlan] = useState("")
  const [interests , setInterests] = useState([])
  const [updates , setUpdates] = useState("")

  const [comment , setComment] = useState("")

  const [formData , setFormData] = useState(false);


  const interestsChangeHandler = (event) =>{
    const {checked , value} = event.target;
    if(checked){
      setInterests([...interests , value])
    }
    else{
      setInterests(interests.filter((interest) => interest != value))
    }
  }


  const handleFormSubmit = (event) =>{
    event.preventDefault();

   if(name && email && plan && interests && updates){
    setFormData(true)
   }
  }


  return (
    <div>
      <h1>Subscription Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="full_name">Full Name: </label>
          <input type="text"  id="full_name"  name="full_name" required onChange={(event)=>setName(event.target.value)}/>
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" required onChange={(event) => setEmail(event.target.value)}/>
        </div>

        <div>
          <label htmlFor="subscription_plan">Subscription Plan</label>
          <select onChange={(event)=>setPlan(event.target.value)} name="subscription_plan" id="subscription_plan" required>
            <option value="" >Select Plan</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Unlimited">Unlimited</option>
          </select>
        </div>

        <div>
          <label htmlFor="interests">Interests: </label>
          <br />
          <label htmlFor="technology">
            <input type="checkbox" name="interests" id="technology" value="technology" onChange={interestsChangeHandler} /> Technology
          </label>
          <br />
          <label htmlFor="Fitness">
            <input type="checkbox" name="Fitness" id="Fitness"  value="Fitness" onChange={interestsChangeHandler}/>  Fitness
          </label>
          <br />
          <label htmlFor="Cooking">
            <input type="checkbox" name="Cooking" id="Cooking"  value="Cooking" onChange={interestsChangeHandler}/> Cooking
          </label>
        </div>

        <div>
          <label>Want to Receieve Updates: </label>
          <br />
          <label htmlFor="yes">
            <input required type="radio" name="updates" id="yes"  value="yes" onChange={(event) => setUpdates(event.target.value)}/>Yes
          </label>
          <br />
          <label htmlFor="no">
            <input required type="radio" name="updates" id="no"  value="no" onChange={(event)=>setUpdates(event.target.value)}/>No
          </label>

        </div>
        <div>
          <label htmlFor="comment">comment</label>
          <br />
          <textarea onChange={(event) => setComment(event.target.value)} name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Subscribe</button>
      </form>

      {
        formData && (
          <div>
            <p>Full Name: {name}</p>
            <p>Email: {email}</p>
            <p>Subscription Plan: {plan}</p>
            <p>Interest: {interests.join(", ")}</p>
            <p>want to receieve updates ? {updates}</p>
            <p>comments: {comment ? comment : "none"}</p>
          </div>
        )
      }
    </div>
  )
}

export default App
