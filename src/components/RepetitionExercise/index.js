import React, { useState } from "react"

function RepetitionExercise(props) {

    // State to store count value
    const [count, setCount] = useState(0);

    // Function to increment count by 1
    const incrementCount = () => {
        // Update state with incremented value
        setCount(count + 1);
    };

    const resetCount = () => {
        setCount(count === 0);
    }

    return (
        <div className="app">

            <p>{props.exerciseName}</p>
            <p>Reps: {count === 0 ? "0" : count === false ? "0" : count}</p>
            <button onClick={incrementCount}>Add Rep</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;
