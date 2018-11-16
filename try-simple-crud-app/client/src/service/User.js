import axios from 'axios'

export const postUser = async (name, age) => {
  try {
    const res = await axios.post('/api/user', { name, age });
    return res;
  } catch (err) {
    return Promise.reject(err);
  }
}

export const getUsers = async () => {
  try {
    const res = await axios.get('/api/user');
    return (res && res.data) ? res.data : Promise.reject(res);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const updateUser = async (id, age) => {
  try {
    const res = await axios.put('/api/user', { id });
    return (res && res.data) ? res.data : Promise.reject(res);
  } catch (err) {
    return Promise.reject(err);
  }
}