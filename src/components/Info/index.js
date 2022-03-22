import React from "react"

function Info(props) {
    return (
        <>
            <h2>Info about our exercises</h2>
            <p>{props.exerciseInfo}</p>
        </>
    )
}

export default Info;
