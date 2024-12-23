import axios from 'axios';


export default axios.create({
    baseURL: 'https://mobomart-deployment-latest.onrender.com',
    headers: {"ngrok-skip-browser-warning":"true"}
});