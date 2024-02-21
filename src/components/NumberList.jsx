const NumberList = (props) => {
  const listedPersons = props.listedPersons;
  console.log(listedPersons);
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