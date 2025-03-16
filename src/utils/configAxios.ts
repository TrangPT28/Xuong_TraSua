import axios from 'axios';

// Tạo instance Axios
const instanceAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default instanceAxios;