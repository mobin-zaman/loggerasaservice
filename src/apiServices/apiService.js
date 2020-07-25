import axios from 'axios';



// const BASE_URL = 'http://192.168.0.100:8000/api';



export async  function signUp(username, email, password) {

        const response =await axios.post(`/api/auth/register`, {
            name: username,
            email,
            password
        })

        console.log("response: ", response);
}