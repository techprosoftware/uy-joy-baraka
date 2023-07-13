import axios from "axios";

axios.defaults.baseURL = 'http://test.uyjoybaraka.uz/';

axios.interceptors.request.use({
  Headers: {}
})

export default axios