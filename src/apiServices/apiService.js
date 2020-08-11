import axios from "axios";
import { getAuthenticationHeader } from "./Auth/authenticatedChecker";

const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://95.216.146.201:8000';

export function signUp(username, email, password) {
  return axios.post(`${BASE_URL}/api/auth/register`, {
    name: username,
    email,
    password,
  });
}

export function login(email, password) {
  return axios.post(`${BASE_URL}/api/auth/login`, {
    email,
    password,
  });
}

export async function getApplicationList() {
  return axios.get(`${BASE_URL}/api/applications/`, await getAuthenticationHeader());
}

export async function addApplication(name, description) {
  return axios.post(
      `${BASE_URL}/api/applications`,
    {
      name,
      description,
    },
    await getAuthenticationHeader()
  );
}

export async function getApplicationById(applicationId) {
  return axios.get(
    `${BASE_URL}/api/applications/${applicationId}`,
    await getAuthenticationHeader()
  );
}
