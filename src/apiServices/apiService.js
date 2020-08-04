import axios from "axios";
import { getAuthenticationHeader } from "./Auth/authenticatedChecker";

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

export async function getAppicationList() {
  return axios.get("/api/applications/", await getAuthenticationHeader());
}

export async function addApplication(name, description) {
  return axios.post(
    "/api/applications",
    {
      name,
      description,
    },
    await getAuthenticationHeader()
  );
}
