import { useEffect, useState } from 'react';

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
      // alert(`${newName} is already in phonebook`);
      const changedPerson = persons.find(person => person.name === newName);
      changedPerson.number = newNumber;
      numberService.change(changedPerson)
        .then(newPersonInfo => {
          const newPersons = persons;
          const index = newPersons.findIndex(person => person.name === newName);
          if (index !== -1) {
            newPersons[index] = newPersonInfo;
            setPersons[newPersons];
          }
          setNewName('');
          setNewNumber('');
        })
      return;
    }

    numberService.add(newPerson)
      .then(res => {
        setPersons(persons.concat(res));
        setNewName('');
        setNewNumber('');
      }).catch( err => {
        alert(`jokin meni vikaan`);
      });
  }

  const removePerson = (id) => {

    const person = persons.find(person => person.id === id);

    if (!window.confirm(`Really want to delete "${person.name}"?`)) {
      return
    }

    numberService.remove(id)
      .then(res => {
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
