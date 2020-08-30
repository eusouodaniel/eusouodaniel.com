
import axios from 'axios';

const Api = axios.create({baseURL: process.env.GATSBY_API_URL})

export default Api;