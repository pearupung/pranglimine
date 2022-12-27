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

    return (
        <div>
            <div className="keyboard">
            <p className="user-input">{userInput}</p>

            {keyboard.map((key, index) => (
            <div 
            key={index} 
            onClick={() => {addNumber(key)}}
            className={key !== "OK"? "button" : "ok-button"}>
                {key}
                </div>
        ))}
        </div>
        </div>
    )
}

export default Keyboard