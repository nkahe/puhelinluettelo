import { useState } from 'react';
import AddNumberForm from './components/AddNumberForm';
import NumberList from './components/NumberList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  // const [ listedPersons, setListedPersons ] = useState(persons);
  const [ filter, setFilter ] = useState('');
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const changeFilter = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  }

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const personExists = persons.some(person => person.name === newName);

    if (personExists) {
      alert(`${newName} is already in phonebook`);
      return;
    }

    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <p>filter shown with <input onChange={changeFilter}/></p>

      <h2>Add new</h2>

      <AddNumberForm  addName={ addName }
                      newName={ newName }
                      setNewName={ setNewName }
                      newNumber={ newNumber }
                      setNewNumber={ setNewNumber }
      />

      <h2>Numbers</h2>
      
      <NumberList persons={persons} filter={filter}/>

    </div>
  )

}

export default App
