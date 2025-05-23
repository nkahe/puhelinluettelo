import axios from 'axios';

const baseUrl = '/api/persons';
// const baseUrl = 'http://localhost:3004/api/persons';

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then(res => res.data);
}

const add = (newPerson) => {
  const req = axios.post(baseUrl, newPerson);
  return req.then(res => res.data);
}

const change = (person) => {
  const req = axios.put(`${baseUrl}/${person.id}`, person);
  return req.then(res => res.data);
}

const remove = (id) => {
  const req = axios.delete(baseUrl + '/' + id);
  
  return req.then(res => {
    console.log('number service, remove result: ', res);
    return res.data
  });
}

export default { getAll, add, change, remove }