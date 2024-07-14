import axios from 'axios';

const BASE_URL = 'https://panda-market-api.vercel.app';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default axiosInstance;
