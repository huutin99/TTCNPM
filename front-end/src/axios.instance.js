import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
export const instance = axios.create({
    baseURL: SERVER_HOST,
    timeout: 20000,
    headers: {
        // 'X-Custom-Header': 'foobar' 
        "Access-Control-Allow-Origin": "*"
    }
});