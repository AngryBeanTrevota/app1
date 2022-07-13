import { useEffect, useState } from 'react'
import axios from 'axios'

/* const Filter = ({input, onChangeFunction}) => {
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
} */

const Pesquisa = ({pesquisa, atualizaPesquisa}) => {
  return(
    <div>
      find countries: <input value={pesquisa} onChange={atualizaPesquisa}/>
    </div>
  )
}

const ViewPais = ({pais, linguas}) => {
  return(
    <div>
    <h1>{pais.name.common}</h1>

    <p>capital: {pais.capital}</p>
    <p>area: {pais.area}</p>
    
    <h3>Languages:</h3>
    <ul>
      {Object.keys(linguas).map(key => <li key={key}>{linguas[key]}</li>)}                               
    </ul>

    <img src={pais.flags.png}></img>
  </div>
  )
}

const Paises = ({paises, linguas, setLinguas, botaoMostrar, displayPais, setDisplayPais}) => {
  if(paises.length > 1){
    console.log("maior que 1")
    return(
      <div>
        {displayPais}
        {paises.map((pais, i) => <div key={i}>
          {pais.name.common}<button onClick={() => setDisplayPais(botaoMostrar(pais))}>show</button>
          </div>)}  
      </div>
    )
  }
  else
  {
    if(paises.length == 0)
    {
      return(
        <div></div>
      )
    }
    else
    {
      console.log("apenas 1")
      setLinguas(paises[0].languages)
      console.log(linguas)
      return(
        <div>
          <ViewPais pais={paises[0]} linguas={linguas}/>
        </div>
      )
    }
  }
}

const App = () => {
  const [pesquisa, setPesquisa] = useState("")
  const [paises, setPaises] = useState([])
  const [textoAviso, setTextoAviso] = useState("")
  const [linguas, setLinguas] = useState([])
  const [displayPais, setDisplayPais] = useState("")

  const atualizaPesquisa = (event) => {
    setPesquisa(event.target.value)
    setDisplayPais("")
    console.log(event.target.value)
  }

  const botaoMostrar = (pais) => {                                  //ERRO AQUI
    setLinguas(pais.languages)
    console.log(linguas)
    return(
      <div>
        <ViewPais pais={pais} linguas={linguas}/>
      </div>
    )
  }

  useEffect(() => {
    if(pesquisa != "")
    {
      axios
      .get(`https://restcountries.com/v3.1/name/${pesquisa}`)
      .then(response => {
        console.log(response.data);
        if(response.data.length > 10)
        {
          setPaises([])
          setTextoAviso("Too many matches, specify another filter.")
        }
        else
        {
          setPaises(response.data)
          setTextoAviso("")
        }
      })
    }
  }, [pesquisa, setPesquisa])

  return(
    <div>
      <Pesquisa pesquisa={pesquisa} atualizaPesquisa={atualizaPesquisa}/>
      <p>{textoAviso}</p>
      <Paises paises={paises} linguas={linguas} setLinguas={setLinguas} botaoMostrar={botaoMostrar} 
      displayPais={displayPais} setDisplayPais={setDisplayPais}/>          
    </div>
  )
}

export default App