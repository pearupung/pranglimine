
const Keyboard = () => {

    const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "OK"]

    return (
        <div className="keyboard">
        {keyboard.map((key, index) => (
            <div 
            key={index} 
            className={key !== "OK"? "button" : "ok-button"}>
                {key}
                </div>
        ))}
        </div>
       
    )
}

export default Keyboard