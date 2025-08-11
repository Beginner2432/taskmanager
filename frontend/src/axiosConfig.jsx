import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: '/api', //
  // baseURL: 'http://localhost:5001', // local
  baseURL: 'http://3.25.109.164:5001', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
