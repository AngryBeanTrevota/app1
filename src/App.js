import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = (props) => (
  <p>{props.text} {props.value} {props.textAfter}</p>
)

const Statistics = ( {good, neutral, bad} ) => {
  return (
    <div>
      <h1>Statistics</h1>
      <Display text='good' value={good} textAfter=''/>
      <Display text='neutral' value={neutral} textAfter=''/>
      <Display text='bad' value={bad} textAfter=''/>
      <Display text='all' value={good + neutral + bad} textAfter=''/>
      <Display text='avarage' value={(good - bad) / (good + neutral + bad)} textAfter=''/>
      <Display text='positive' value={(good / (good + neutral + bad)) * 100} textAfter='%'/>
    </div>
  )}

const App = () => {
  // Save clicks of each button to its own state                 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseValue = (value, setValue) => {
    console.log(value);
    setValue(value + 1);
  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={() => increaseValue(good, setGood)} text="good"/>
      <Button handleClick={() => increaseValue(neutral, setNeutral)} text="neutral"/>
      <Button handleClick={() => increaseValue(bad, setBad)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
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