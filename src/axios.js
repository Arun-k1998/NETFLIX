import{Base_URL} from './components/constants/constants'
import axios from 'axios'
const instance = axios.create({
    baseURL: Base_URL
  });

export default instance;