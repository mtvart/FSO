const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header kurssi={course} />
	  <Content osa1={part1.name}  harjoitus1={part1.exercises} osa2={part2.name}  harjoitus2={part2.exercises} osa3={part3.name}  harjoitus3={part3.exercises} />
	  <Total harjoitukset={part1.exercises + part2.exercises + part3.exercises} />
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

const Part = (props) => {
  return(
    <div>
      <p>{props.osa} {props.harjoitus} </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part osa={props.osa1} harjoitus={props.harjoitus1} />
      <Part osa={props.osa2} harjoitus={props.harjoitus2} />
      <Part osa={props.osa3} harjoitus={props.harjoitus3} />
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