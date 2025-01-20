/* eslint-disable react/prop-types */
import './App.css'


const Greeting = ({name}) => {
  return <p>Hello, {name}</p>
}

const IndianGreet = ({name}) => {
  return <p>Namaste, {name}</p>
}

const ParentComponent = ({children}) => {
  return (
    <div style={{padding:"2rem", background:'#0303'}}>
      {children}
    </div>
  )
}

function App() {

  return (
    <>
    <Greeting name={'Tanay'} />
    <ParentComponent>
    <IndianGreet name={"Arun"} />
      <p>I am inside the parent component</p>
    </ParentComponent>
    </>
  )
}

export default App
