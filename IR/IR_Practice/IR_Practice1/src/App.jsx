import { useState } from "react";

const CheckNumber = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Positive And Negative Numbers</h1>
      <p>count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
      <p>The Count is {counter >= 0 ? "Positive" : "Negative"}</p>
    </div>
  );
};

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [formState, setFormState] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name && email) {
      setFormState(true);
    }
  };

  return (
    <>
      <h1>User Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
      {formState && (
        <div>
          <h2>Welcome , {name} !</h2>
        </div>
      )}
    </>
  );
};

const TemperatureConverter = () => {

  const [celsius , setCelsius] = useState(0)
  const [fahrenheit , setFahrenheit] = useState(32)

  const celsiusChangeHandler = (event) =>{
     const celsiusValue = parseFloat(event.target.value)
     setCelsius(celsiusValue)
     setFahrenheit((celsiusValue * 1.8) +32)
  }

  const fahrenheitChangeHandler = (event) =>{
    const fahrenheitValue = parseFloat(event.target.value)
    setFahrenheit(fahrenheitValue)
    setCelsius((fahrenheitValue - 32)/1.8)
  }

  return (
    <>
      <h1>Temperature Converter</h1>
      <div>
        <label htmlFor="celsius">Celsius: </label>
        <input
          type="number"
          name="celsius"
          id="celsius"
       onChange={celsiusChangeHandler}
       value={celsius}
        />
      </div>
      <div>
        <label htmlFor="fahrenheit">Fahrenheit: </label>
        <input
          type="number"
          name="fahrenheit"
          id="fahrenheit"
        onChange={fahrenheitChangeHandler}
       value={fahrenheit}
        />
      </div>
    </>
  );
};


const ShoppingCart = () =>{


  const [products , setProducts] = useState([
    {
      id:1,
      product:'Product A',
      price:10
    }
  ]);

  const addProductA = () =>{
    const productA = {
      id:products.length+1,
      product:'Product A',
      price:10
    }
    setProducts((prev)=>[...prev , productA])
  }

  const addProductB = () =>{
    const productB = {
      id:products.length+1,
      product:'Product B',
      price:20
    }

    setProducts((prev) => [...prev , productB])
  }

  const totalPrice = products.reduce((totalPrice , currentProduct)=> totalPrice + currentProduct.price ,0)
  return(
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {
          products.map((product) =>(
            <li key={product.id}>{product.product} - ${product.price}</li>
          ))
        }
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={addProductA}>Add Product A</button>
      <button onClick={addProductB}>Add Product B</button>
    </>
  )
}

const QuizApp = () => {
  const questions = [
    "What is the national bird of India?",
    "How many colors are there in Indian flag?",
    "What is the color of sky?",
  ];

   const [questionIndex , setQuestionIndex] = useState(0)
   


  return(
    <>
   
   <h1>Quiz App</h1>

     { questionIndex <questions.length   ? (
      <div>
      
      <p>{questions[questionIndex]} <button onClick={()=>setQuestionIndex(questionIndex+1)}>next</button></p>
        <input type="text" />
        </div>
     ):(
      <p>You answered all the questions ! </p>
     )
     
      }
    </>
  )
}

function App() {
  return (
    <>
      <CheckNumber />

      <Login />
      <TemperatureConverter />
      <ShoppingCart/>
      <QuizApp/>
    </>
  );
}

export default App;
