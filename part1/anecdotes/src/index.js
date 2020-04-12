import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const numOfAnecdotes = props.anecdotes.length;
  const [anecdoteVotes, setAnecdoteVotes] = useState(Array(numOfAnecdotes).fill(0))
  const mostPopularQuotePosition = Math.max(anecdoteVotes.indexOf(Math.max(...anecdoteVotes)), 0)

  const voting = () => {
    const copy = [...anecdoteVotes]
    copy[selected] += 1
    setAnecdoteVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {anecdoteVotes[selected]} votes</p>
      <button onClick={voting}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * numOfAnecdotes))}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[mostPopularQuotePosition]}</p>
      <p>has {anecdoteVotes[mostPopularQuotePosition]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)