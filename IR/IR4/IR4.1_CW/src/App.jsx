import { useState, } from 'react'


const ToggleTheme = ()=>{
  const [theme , setTheme] = useState('Light');

  return(
    <div>
      <p>current theme {theme}</p>
      <button onClick={()=>setTheme(theme === "Light" ? "Dark" : "Light")}>Toggle Theme</button>
    </div>
  )
}

const PasswordShowhide = ()=>{
  const [visibility , setVisibility] = useState(false);

  return(
    <>
      <p>{visibility ? "password" : "pass*********"}</p>
      <button onClick={()=>setVisibility(!visibility)}>Show/hide Password</button>
    </>
  )
}

const ExpandableText = ()=>{
  const [expended, setExpended] = useState(false)
  const text = "this is a longer text that is typically hidden unless expanded."

  return(
    <div>
      <p>{expended ? text : text.substring(0,20)}</p>
      <button onClick={()=>setExpended(!expended)}>{expended ? "Collapse" : "Expanded"}</button>
    </div>
  )
}

const HandleTab = () =>{
  const [tab, setTab] = useState('home');

  return(
    <>
      <button onClick={()=>setTab('home')}>Home</button>
      <button onClick={()=>setTab('profile')}>Profile</button>
      <button onClick={()=>setTab('message')}>Message</button>
      <p>content of {tab} tab</p>
    </>
  )
}

const HandleFontSize = ()=>{
  const [fontSize, setFontSize] = useState(20);

  return(
    <>
      <p style={{fontSize:fontSize}}> 
      
      Adjust my fontSize
      </p>
      <button onClick={()=>setFontSize(fontSize+1)}>Increase</button>
      <button onClick={()=>setFontSize(fontSize-1)}>Decrease</button>
    </>
  )
}

function App() {

  return (
    <>  
    <ToggleTheme/>
    <hr />
    <PasswordShowhide/>
    <hr />
    <ExpandableText/>
    <hr />
    <HandleTab/>
    <hr />
    <HandleFontSize/>

    
    </>
  )
}

export default App
