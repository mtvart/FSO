const App = () => {
  const course = 'Half Stack application development'
    const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header kurssi={course} />
	  <Content osa1={parts[0].name}  harjoitus1={parts[0].exercises} osa2={parts[1].name}  harjoitus2={parts[1].exercises} osa3={parts[2].name}  harjoitus3={parts[2].exercises} />
	  <Total harjoitukset={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
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