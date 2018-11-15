import axios from 'axios'

export const postUser = async (name, age) => {
  try {
    const res = await axios.post('/api/user', {
      name: '',
      age: ''

    });
    return res;
  } catch (err) {
    return Promise.reject(err);
  }
}
