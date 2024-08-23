import { useState } from "react";



const Survey = ()=>{
  const [text , setText] = useState('')

  function showSurvey(){
    alert(`survey response: ${text}`)
  }
  return(
    <>
      <label htmlFor="textInput">Take the survey</label>
      <textarea  id="textInput" cols="30" rows="10" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
      <button onClick={showSurvey}>Submit Survey</button>
    </>
  )
}


const Recipe = () =>{
  const [recipe , setRecipe] = useState('')
  const [steps, setSteps] = useState([])
console.log(steps)
  return(
    <>
      <label htmlFor="recipeInput">Enter your Recipe ? </label>
      <textarea id="recipeInput" cols="30" rows="10" value={recipe} onChange={(e)=>setRecipe(e.target.value)}></textarea>
      <button onClick={()=>setSteps(recipe.split(','))}>Save Recipe</button>
      <ol>
        {
          steps.map((step , index)=>(
            <li key={index}>
              {step}
            </li>
          ))
        }
      </ol>
    </>
  )
}

const DiaryEntery = ()=>{
  const [entery , setEntery] = useState('');
  const [displayEntery , setDisplayEntery] = useState('')

  return(
    <>
      <label htmlFor="diaryInput" >write your diary entery? </label>
      <textarea  id="diaryInput" cols="30" rows="10" value={entery} onChange={(e)=>setEntery(e.target.value)}></textarea>
      <button onClick={()=>setDisplayEntery(entery)}>save diary entery</button>
      {displayEntery && <p style={{fontStyle:'italic'}}>diary entery saved: {displayEntery}</p>}
    </>
  )
}

const ShareStory = ()=>{
  const [story , setStory] = useState('');
  const [displayStory , setDisplayStory] = useState('');

  return(
    <>
      <label htmlFor="storyInput">share your story:</label>
      <textarea  id="storyInput" cols="30" rows="10" value={story} onChange={(e)=>setStory(e.target.value)}></textarea>
      <button onClick={()=>setDisplayStory(story)}>submit story</button>
      {displayStory && <p>Your Story: {displayStory}</p>}
    </>
  )
}

const ListItem = ()=>{
  const [items, setItem] = useState('');
  const [list, setList] = useState([])

  return(
    <>
      <label htmlFor="inputText">Enter a list of Items</label>
      <textarea name="" id="" cols="30" rows="10" value={items} onChange={(e)=>setItem(e.target.value)}></textarea>
      <button onClick={()=>setList(items.split(','))}>Display Items</button>
      <ul>
        {
          list.map((item,index)=>(
            <li key={index}>
            {item}
            </li>
          ))
        }
      </ul>
    </>
  )
}


function App() {
  return (
    <>
    <h1>Text Area Programs</h1>
    <Survey/>
    <br />
    <br />
    <Recipe/>
    <br />
    <br />
    <DiaryEntery/>
    <br />
    <br />
    <ShareStory/>
    <br />
    <br />
    <ListItem/>
    </>
  );
}

export default App;
