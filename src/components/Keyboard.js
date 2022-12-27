
const Keyboard = ({score, challenge, userInput, addNumber, submitAnswer}) => {

    const keyboard = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "OK"]

    return (
        <div>
            <div className="keyboard">

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