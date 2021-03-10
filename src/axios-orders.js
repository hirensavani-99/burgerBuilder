import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-a6b91.firebaseio.com/'
})

export default instance;