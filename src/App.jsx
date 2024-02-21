import { useState } from 'react';
import NumberList from './components/NumberList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [listedPersons, setListedPersons] = useState(persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  const changeFilter = (event) => {
    const filter = event.target.value;
    const newListedPersons = persons.filter(person =>
      person.name.toLowerCase().includes(filter));
    setListedPersons(newListedPersons);
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <p>filter shown with <input onChange={changeFilter}/></p>

      <h2>Add new</h2>

      <form onSubmit={addName}>
        <div>
          name:
          <input  onChange={(event) => setNewName(event.target.value)}
                  value={newName}
          /><br />
          puh:
          <input onChange={(event) => setNewNumber(event.target.value)}
                 value={newNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <NumberList listedPersons={listedPersons}/>

    </div>
  )

}

export default App
