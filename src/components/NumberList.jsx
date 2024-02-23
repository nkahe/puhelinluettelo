import numberService from '../services/numbers';

const NumberList = ({ persons, filter, removePerson }) => {

  let listedPersons = persons;
  if (filter.length > 0 ) {
    listedPersons = persons.filter(person =>
      person.name.toLowerCase().includes(filter));
  }

  return (
    <div>
      {
        listedPersons.map((person) => (
          <p key={person.id}>
            {person.name}, {person.number}
            <button onClick={() => removePerson(person.id)}>
              delete
            </button>
          </p>
        ))
      }
    </div>
  )
}

export default NumberList