import "./App.css"
import React from "react"
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"
import Questionnaire from "./components/Questionnaire"
import Info from "./components/Info"

function App() {
    return (
        <div className="App">
            <h1>Let's do some exercises!</h1>
            <br></br>
            <RepetitionExercise exerciseName="Push ups"></RepetitionExercise>
            <br></br>
            <DurationExercise exerciseName="Running"></DurationExercise>
            <br></br>
            <Info exerciseInfo="Strength training helps you preserve the muscle you have as well as increase your muscle mass."></Info>
            <br></br>
            <Questionnaire exerciseType1="strength training" exerciseType2="endurance training"></Questionnaire>
        </div>
    )
}

export default App