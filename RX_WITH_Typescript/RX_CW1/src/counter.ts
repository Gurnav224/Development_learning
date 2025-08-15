import { createStore } from "redux"


// Define the initial state of the counter
const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        default:
            return state
    }
}

const store = createStore(counterReducer)





export function setupCounter(element: HTMLButtonElement, increment_button:HTMLButtonElement, decrement_button:HTMLButtonElement) {

  store.subscribe(() => {
  const state = store.getState()
  element.innerHTML = `count is ${state.counter}`
})

increment_button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

decrement_button.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' })
})

}
