import axios, {AxiosInstance} from 'axios';

const baseURL = 'https://dummy.restapiexample.com/api/v1/'; // Replace with your API base URL

const headers = {
  'Content-Type': 'application/json',
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers,
  timeout: 30000, // 30 seconds timeout
});

export {axiosInstance};
