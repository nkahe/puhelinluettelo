import numberService from '../services/numbers';

const NumberList = ({ persons, filter }) => {

  let listedPersons = persons;
  console.log('listed: ', listedPersons);
  if (filter.length > 0 ) {
    listedPersons = persons.filter(person =>
      person.name.toLowerCase().includes(filter));
  }

  const removePerson = (id) => {
    numberService.remove(id)
      .then(res => {
        console.log('Poiston vastaus', res);

      })
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