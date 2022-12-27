import { useState } from "react"

const Keyboard = () => {

    const keyboard = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "OK"]
    const challenges = [
        ['2 + 2 = ', 4],
        ['1 + 3 = ', 4],
        ['4 + 4 = ', 8],
        ['5 + 2 = ', 7],
        ['6 + 2 = ', 8],
        ['7 + 2 = ', 9],
        ['2 + 5 = ', 7],
        ['2 + 4 = ', 6],
        ['1 + 1 = ', 2],
        ['3 + 2 = ', 5],
    ]

    const [userInput, setUserInput] = useState("")
    const [score, setScore] = useState(0)

    const generateChallenge = () => {
        const challengeIndex = Math.floor(Math.random() * 10)
        console.log(challengeIndex)
        return challenges[challengeIndex] 
    }

    const [challenge, setChallenge] = useState(generateChallenge())

    const addNumber = (number) => {
        if (typeof number !== "number") {
            return
        }
        setUserInput(userInput + number)
    }

    const submitAnswer = () => {
        if (userInput == challenge[1]) {
            setScore(score + 2)
        } else {
            setScore(score - 1)
        }

        setUserInput('')
        setChallenge(generateChallenge())
    }

    console.log(challenge)


    return (
        <div>
            <div className="keyboard">
            <div className="user-input">Punkte: {score}</div>
            <div className="user-input">{challenge[0]}{userInput}</div>

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