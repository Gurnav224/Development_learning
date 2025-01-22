import { useEffect } from "react";
import { useState } from "react"



export default function  useLogger(){
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log(value)
    },[value])

    return {value , setValue }
}