import axios from 'axios';
import { toast } from 'react-toastify';
import { history } from '../../App';

axios.defaults.baseURL = 'https://wookie.codesubmit.io';

axios.interceptors.request.use(
  config => {
    const token = process.env.REACT_APP_WOOKIE_TOKEN;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(undefined, error => {
  if (error.message === 'Network Error' && !error.response) {
    toast.error('Network is not available - check your connection');
  }
  const { status } = error.response;
  if (status === 404) {
    history.push('/not-found');
  }
  if (status === 400) {
    //handle 400
  }
  if (status === 500) {
    toast.error('Something goes wrong :(');
  }
  throw error.response;
});

export default axios;
