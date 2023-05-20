const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header kurssi={course.name} />
	  <Content osat={course} />
	  <Total osat={course} />
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

const Part = (props) => {console.log(props)
  return(
    <div>
      <p>{props.osa} {props.harjoitus} </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part osa={props.osat.parts[0].name} harjoitus={props.osat.parts[0].exercises} />
      <Part osa={props.osat.parts[1].name} harjoitus={props.osat.parts[1].exercises} />
      <Part osa={props.osat.parts[2].name} harjoitus={props.osat.parts[2].exercises} />
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.osat.parts[0].exercises + props.osat.parts[1].exercises + props.osat.parts[2].exercises}</p>
    </div>
  )
}


export default App