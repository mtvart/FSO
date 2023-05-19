const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [
  {part: part1, excercises: exercises1},
  {part: part2, excercises: exercises2},
  {part: part3, excercises: exercises3},
  ]

  return (
    <div>
      <Header kurssi={course}/>
	  <Content osa1 = {part1} harjoitus1={exercises1}
      osa2 = {part2} harjoitus2={exercises2} 
      osa3 = {part3} harjoitus3={exercises3} />
	  <Total harjoitukset={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.osa1} {props.harjoitus1}</p>
      <p>{props.osa2} {props.harjoitus2}</p>
      <p>{props.osa3} {props.harjoitus3}</p>

    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.harjoitukset}</p>
    </div>
  )
}


export default App