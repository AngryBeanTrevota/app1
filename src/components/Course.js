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

export default Course