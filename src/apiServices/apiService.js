import axios from 'axios';

export default class ApiService {

    BASE_URL = 'http://localhost:8000/api';

    async signUp(username, email, password) {

        const response =await axios.post('/auth/register', {
            name: username,
            email,
            password
        })

        console.log("response: ", response);
    }
}