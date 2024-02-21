
const AddNumberForm = ({
  addName, newName, setNewName, newNumber, setNewNumber
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name:
        <input onChange={(event) => setNewName(event.target.value)}
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
  )
}

export default AddNumberForm