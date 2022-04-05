import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '22450386'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log("persons: ", persons)
    console.log("new name: ", newName)
    if(persons.find(element => element.name === newName.trim()))
    {
      alert(`${newName.trim()} is already added to phonebook`);
    }
    else
    {
      const nameObject = { name: newName , number: newNumber}
      setPersons(persons.concat(nameObject))
      setNewName("")
      setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person, i) => <div key={persons.length + i}>{person.name}:  {person.number}</div> ) // Somei com o índice porque senão os dois primeiros tem o mesmo índice e dá erro
      }
    </div>
  )
}

export default App