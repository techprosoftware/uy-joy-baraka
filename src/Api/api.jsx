import axios from "axios";
export const BASE_URL = 'http://api.uyjoybaraka.uz/'
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use({
  Headers: {}
})

export default axios