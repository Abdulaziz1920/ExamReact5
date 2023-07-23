import axios from "axios";
import { TOKEN } from "../constants/const";
import Cookies from "js-cookie";
const token = Cookies.get(TOKEN);
const apiKey = import.meta.env.VITE_API_KEY;

const request = axios.create({
  baseURL: apiKey,
  timeout: 10000,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default request;
