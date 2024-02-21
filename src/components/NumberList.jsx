const NumberList = ({ persons, filter }) => {

  let listedPersons = persons;
  if (filter.length > 0 ) {
    listedPersons = persons.filter(person =>
      person.name.toLowerCase().includes(filter));
  }
  
  return (
    <div>
      {
        listedPersons.map((person) => (
          <p key={person.name}>
            {person.name}, {person.number}
          </p>
        ))
      }
    </div>
  )
}

export default NumberList