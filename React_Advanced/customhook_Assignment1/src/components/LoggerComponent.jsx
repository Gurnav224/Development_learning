import useLogger from "../customHooks/useLogger"


export default function LoggerComponent(){
    const {value , setValue } = useLogger('');
    return (
        <div>
            <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            />
            <p>value: {value}</p>
        </div>
    )
}