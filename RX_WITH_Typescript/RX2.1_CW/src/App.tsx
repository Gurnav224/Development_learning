
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import type { AppDispatch, RootState } from './store/store';
import { decrement, increment, incrementByAmount } from './store/action';
import { useState} from 'react';

function App() {
  const count = useSelector((state:RootState) => state.value);

  const dispatch = useDispatch<AppDispatch>()
  const [amount , setAmount] = useState<number | undefined>(0)


  const handleIncrement = () => {
    if (amount !== undefined) {
      dispatch(incrementByAmount(amount));
    }
  };

  return (
    <>
      <h1> redux + typescript example</h1>
      <input style={{fontSize:'2rem', padding:'1rem'}} type="number" value={amount}  
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value))}
      />
      <br />
      <button onClick={handleIncrement}>Update by Amount</button>
      <br />
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())} >increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}

export default App
