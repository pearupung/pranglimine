import { useState } from "react"

const Keyboard = () => {

    const keyboard = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "OK"]

    const [userInput, setUserInput] = useState("")

    const addNumber = (number) => {
        if (typeof number !== "number") {
            return
        }
        setUserInput(userInput + number)
    }

    const submitAnswer = () => {
        setUserInput('')
    }

    return (
        <div>
            <div className="keyboard">
            <p className="user-input">{userInput}</p>

            {keyboard.map((key, index) => {
            const isOkButton = key !== "OK"
            const style = isOkButton? "button" : "ok-button"
            const action = isOkButton? addNumber : submitAnswer
            return (
            <div 
            key={index}
            onClick={() => {action(key)}}
            className={style}>
                {key}
            </div>  
            )}
        )}
        </div>
        </div>
    )
}

export default Keyboard