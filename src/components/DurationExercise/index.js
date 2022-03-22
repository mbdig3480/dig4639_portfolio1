import React, { useEffect, useState } from "react"

function DurationExercise(props) {
    
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let interval = null;

        if(start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10)
        } 
        else {
            clearInterval(interval);
        }

        return() => clearInterval(interval)
    }, [start])

    return (
        <div className="App">
            <p>{props.exerciseName}</p>
            <p>Timer:</p>
            <span>{("0" + Math.floor((time/60000) % 60)).slice(-2) + ":"}</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2) + ":"}</span>
            <span>{("0" + (time / 10) % 1000).slice(-2)}</span>

            <button onClick={() => setStart(true)}>Start Timer</button>
            <button onClick={() => setStart(false)}>Stop Timer</button>
            <button onClick={() => {setTime(0); setStart(false);}}>Reset</button>
        </div>
    );
}

export default DurationExercise;
