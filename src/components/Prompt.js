

const Prompt = ({challenge, userInput}) => {
    return (
        <div className="user-input">{challenge[0]}{userInput}</div>
    )

}

export default Prompt