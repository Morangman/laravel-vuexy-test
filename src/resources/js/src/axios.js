// axios
import axios from 'axios'

const baseURL = ''

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios.create({
  baseURL
  // You can add your headers here
})
