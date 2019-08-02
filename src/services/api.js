import axios from 'axios';

const API_URL = 'https://api.github.com/users/diogoaoliveira';

export default axios.create({
  baseURL: API_URL,
});
