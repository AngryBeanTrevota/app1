import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
  {props.text}
  </button>
)

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

    </div>
  )
}


/*
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {   
  console.log(props)
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      {props.course.parts.map(value => <Part part={value.name} exercises={value.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  let soma = 0
  props.course.parts.forEach(element => {
    soma = soma + element.exercises
  });
  return(
    <div>
      <p>Number of exercises {soma}</p>
    </div>
  )
}

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
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}
*/

export default App