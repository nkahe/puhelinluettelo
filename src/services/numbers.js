import axios from 'axios';

const baseUrl = 'http://localhost:3002/persons';

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then(res => res.data);
}

const add = (newPerson) => {
  const req = axios.post(baseUrl, newPerson);
  return req.then(res => res.data);
}

const remove = (id) => {
  const req = axios.delete(baseUrl + '/' + id);
  return req.then(res => res.data);
}

export default { getAll, add, remove }