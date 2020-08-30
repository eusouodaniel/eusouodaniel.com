
import axios from 'axios';

const Api = axios.create({baseURL: process.env.API_ROOT})

export default Api;