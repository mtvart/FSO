import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => {
    console.log('clicked the button')
    setGood(good + 1)
  }
  
    const handleNeutralClick = () => {
    console.log('clicked the button')
    setNeutral(neutral + 1)
  }
  
    const handleBadClick = () => {
    console.log('clicked the button')
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
	  <button onClick={handleGoodClick}>good</button>
	  
	  <button onClick={handleNeutralClick}>neutral</button>
	  
	  <button onClick={handleBadClick}>bad</button>
	  
      <h2>statistics</h2>
      <p>good {good}</p>	
	  <p>neutral {neutral}</p>	
	  <p>bad {bad}</p>

    </div>
  )
}

export default App