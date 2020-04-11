import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Feedback = () => {
  return (
    <div>
      <h2>give feedback</h2>
    </div>
  )
}

const Button = ({onClick, name}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral;
  const average = (good - bad) / all;
  const positive = good / all;
  if (all > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic text="good" value={good}></Statistic>
            <Statistic text="neutral" value={neutral}></Statistic>
            <Statistic text="bad" value={bad}></Statistic>
            <Statistic text="all" value={all}></Statistic>
            <Statistic text="average" value={average}></Statistic>
            <Statistic text="positive" value={positive + " %"}></Statistic>
          </tbody>
        </table>        
      </div>    
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )  
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback />
      <Button name="good" onClick={() => setGood(good + 1)} />
      <Button name="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" onClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)