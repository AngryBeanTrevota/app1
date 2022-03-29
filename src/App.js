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
      {props.course.parts.map(value => <div key={value.id}><Part part={value.name} exercises={value.exercises}/></div>)}
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

const Course = ({courses}) => {
  console.log("Cursos: ", courses)
  return(
    <ul>
    {courses.map((course) => 
          <div key={course.id}>
              <Header course={course}/>
              <Content course={course}/>
              <Total course={course}/>
          </div>
      )}
    </ul>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App