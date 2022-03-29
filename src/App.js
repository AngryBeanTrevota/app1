import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {   
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <ul>
      {props.course.parts.map(value => <li key={value.id}><Part part={value.name} exercises={value.exercises}/></li>)}
      </ul>
    </div>
  )
}

const Total = (props) => {
  const soma = props.course.parts.reduce( (total, currentValue) => total + currentValue.exercises, 0)
  return(
    <div>
      <p>Number of exercises {soma}</p>
    </div>
  )
}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course}/>
      <Content course={props.course}/>
      <Total course={props.course}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App