import {create} from "zustand"

type StoreType = {
  counter: number;
  inc: () => void;
  dec: () => void;
}

const useStore = create<StoreType>((set) => ({
  counter:1,
  inc:() => set((state) => ({counter:state.counter + 1})),
  dec:() => set((state)=> ({counter: state.counter - 1}))
}))


 
function App() {

  const {counter, inc , dec} = useStore()
  
  return (
    <div>
     <h1>Learning Zustand</h1>
      <h3> Counter: { counter}</h3>
      <button type="button" onClick={() => inc()}>Incrment</button>
      <button type="button" onClick={() => dec()} >Decrment</button>
    </div>
  )
}

export default App
