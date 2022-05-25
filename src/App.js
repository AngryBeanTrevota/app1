import { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ({input, onChangeFunction}) => {
  return(
    <div>
      filter shown with: <input value={input} onChange={onChangeFunction}/>
    </div>
  )
}

const Form = ({newName, handleNameChange, newNumber, handleNumberChange, addPerson}) => {
  return(
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
  )
}

const Numbers = ({filteredList, persons}) => {
  return(
    <div>
      <h2>Numbers</h2>
      {
        filteredList.map((person, i) => <div key={persons.length + i}>{person.name}:  {person.number}</div> ) 
        // Somei com o índice porque senão os dois primeiros tem o mesmo índice e dá erro
      }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const [filteredList, setFilteredList] = useState(persons)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  useEffect(() => {
    if(filterInput.trim())
    {
      setFilteredList(persons.filter((person) => person.name.toLowerCase().includes(filterInput.toLowerCase())))
    }
    else
    {
      setFilteredList(persons)
    } 
  }, [filterInput, persons])

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {  
    setFilterInput(event.target.value)
  }

  const addPerson = (event) => {     // ERRO AQUI! Usar o tal do useEffect
    event.preventDefault()
    //console.log("new name: ", newName)
    if(persons.find(element => element.name === newName.trim()))
    {
      alert(`${newName.trim()} is already added to phonebook`);
    }
    else
    {
      const nameObject = { name: newName , number: newNumber}
      setPersons([...persons, nameObject])
      setNewName("")
      setNewNumber("")
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter input={filterInput} onChangeFunction={handleFilterChange}/>

      <Form newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} 
      handleNumberChange={handleNumberChange} addPerson={addPerson} />

      <Numbers filteredList={filteredList} persons={persons}/>
    </div>
  )
}

export default App