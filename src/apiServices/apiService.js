import axios from "axios";

// const BASE_URL = 'http://192.168.0.100:8000/api';

export function signUp(username, email, password) {
  return axios.post(`/api/auth/register`, {
    name: username,
    email,
    password,
  });
}

export function login(email, password) {
  return axios.post(`/api/auth/login`, {
    email,
    password,
  });
}
