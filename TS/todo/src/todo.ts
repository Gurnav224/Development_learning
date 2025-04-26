
interface Todo{
    id:number,
    text:string,
    completed:boolean
}


export const todos:Todo[] =  [
    { id: 1, text: "Learn TypeScript", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Drink water", completed: true }
 ]