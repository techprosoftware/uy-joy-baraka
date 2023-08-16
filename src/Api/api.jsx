import axios from "axios";
export const BASE_URL = 'https://uyjoybaraka.uz/'
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use({
  Headers: {}
})

export default axios