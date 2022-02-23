import React from 'react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
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
      {props.parts.map(value => <Part part={value.name} exercises={value.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  let soma = 0
  props.parts.forEach(element => {
    soma = soma + element.exercises
  });
  return(
    <div>
      <p>Number of exercises {soma}</p>
    </div>
  )
}

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
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App