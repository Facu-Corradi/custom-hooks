import { useState } from "react"


export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const sumar = () => {
        setCounter(counter + 1);
    }

    const restar = () => {
        if (counter === 0) return
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue);
    }
    
    return {
        counter,
        sumar,
        restar,
        reset

    }
}