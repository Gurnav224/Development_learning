import  useLocalStroage  from "../customHooks/useLocalStroage"



function LocalStroage(){
    const { value, setValue } = useLocalStroage('input value','');

  

    return(
        <div>
    
        <input 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="value"
        />
        <p>Stored: {value}</p>
        </div>
    )
}

export default  LocalStroage