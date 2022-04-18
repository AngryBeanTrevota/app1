import { useState } from 'react'

const Filter = ({input, onChangeFunction}) => {
  return(
    <div>
      filter shown with: <input value={input} onChange={onChangeFunction}/>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const [filteredList, setFilteredList] = useState(persons)

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {             // o filterInput ta diferente do target e eu nn sei pq
    setFilterInput(event.target.value)
    console.log("filter input:", filterInput)
    console.log("event target:", event.target.value)
    if(event.target.value.trim())
    {
      setFilteredList(persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }
    else
    {
      setFilteredList(persons)
    } 
  }

  const addPerson = (event) => {
    event.preventDefault()
    //console.log("persons: ", persons)
    //console.log("new name: ", newName)
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

      <Filter input={filterInput} onChangeFunction={handleFilterChange}/>

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
        filteredList.map((person, i) => <div key={persons.length + i}>{person.name}:  {person.number}</div> ) // Somei com o índice porque senão os dois primeiros tem o mesmo índice e dá erro
      }
    </div>
  )
}

export default App