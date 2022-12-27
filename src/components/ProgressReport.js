import { useEffect, useState } from "react"

const getTimeLeft = (endTime) => {
    return Math.floor((endTime - new Date().getTime()) / 1000) + 1

}

const ProgressReport = ({score, endTime, level, timesUp}) => {

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(endTime))

    useEffect(() => {
        const interval = setInterval(() => {
            if (getTimeLeft(endTime) > 0) {
                setTimeLeft(getTimeLeft(endTime))
            }
            else {
                timesUp()
                setTimeLeft(getTimeLeft(endTime))
            }
        }, 500)
        console.log(interval)
        return () => clearInterval(interval)

    })
    

    return (
        <div className="progress-report">Punkte: {score} Aeg: {timeLeft} Tase: {level}</div>
    )
}

export default ProgressReport