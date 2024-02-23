import { useEffect, useState } from 'react';
import axios from 'axios';

import AddNumberForm from './components/AddNumberForm';
import NumberList from './components/NumberList';
import numberService from './services/numbers';

const App = () => {

  const [ persons, setPersons ] = useState([]);
  const [ filter, setFilter ] = useState('');

  // Tekstikenttien käsittelyyn.
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  useEffect(() => {
    numberService.getAll()
      .then(res => {
        setPersons(res);
      });
  }, []);

  const changeFilter = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  }

  const addPerson = (event) => {
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

    numberService.add(newPerson)
      .then(res => {
        setPersons(persons.concat(res));
        // setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      }).catch( err => {
        alert(`jokin meni vikaan`);
      });
  }

  const removePerson = (id) => {
    numberService.remove(id)
      .then(res => {
        console.log('Poiston vastaus', res);
        const newPersons = persons.filter(person => (
          person.id !== res.id
        ));
        setPersons(newPersons);
      })
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <p>filter shown with <input onChange={changeFilter}/></p>

      <h2>Add new</h2>

      <AddNumberForm  addName={ addPerson }
                      newName={ newName }
                      setNewName={ setNewName }
                      newNumber={ newNumber }
                      setNewNumber={ setNewNumber }
      />

      <h2>Numbers</h2>
      
      <NumberList persons={persons} filter={filter} removePerson={removePerson}/>

    </div>
  )

}

export default App
