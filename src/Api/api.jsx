import axios from "axios";
export const BASE_URL = 'http://13.49.225.157/'
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use({
  Headers: {}
})

export default axios