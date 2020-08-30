
import axios from 'axios';

const BASE_URL='http://api.eusouodaniel.com';

const Api = axios.create({baseURL: BASE_URL})

export default Api;