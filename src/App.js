import './App.css';
import Keyboard from './components/Keyboard';
import ProgressReport from './components/ProgressReport'
import Prompt from './components/Prompt';
import { useState } from "react"

const levelTime = 40000
let endTime = new Date().getTime() + levelTime

function App() {

  const [userInput, setUserInput] = useState("")
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)

  const generateChallenge = () => {
      const numOne = Math.floor(Math.random() * 10 ** level)
      const numTwo = Math.floor(Math.random() * 10 ** level)

      const challenge = [`${numOne} + ${numTwo} = `, numOne + numTwo]

      console.log(challenge)
      return challenge 
  }

  const [challenge, setChallenge] = useState(generateChallenge())

  const addNumber = (number) => {
      if (typeof number !== "number") {
          return
      }
      setUserInput(userInput + number)
  }

  const submitAnswer = () => {
      if (userInput === challenge[1].toString()) {
          const points = Math.floor(Math.random() * 10 ** level)
          setScore(score + points)
      } else {
          setScore(score - 5)
      }

      setUserInput('')
      setChallenge(generateChallenge())
  }

  const timesUp = () => {
    setLevel(level + 1)
    endTime = new Date().getTime() + levelTime
  }

  console.log(challenge)

  return (
    <div className="App">
      <ProgressReport score={score} endTime={endTime} level={level} timesUp={timesUp}></ProgressReport>
      <Prompt challenge={challenge} userInput={userInput}></Prompt>
      <Keyboard 
        score={score} 
        challenge={challenge} 
        userInput={userInput} 
        addNumber={addNumber} 
        submitAnswer={submitAnswer}></Keyboard>
    </div>
  );
}

export default App;
