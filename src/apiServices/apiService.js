import axios from "axios";
import { getAuthenticationHeader } from "./Auth/authenticatedChecker";

const BASE_URL = "http://logwithease.servebeer.com";
// const BASE_URL = 'http://192.168.0.100:8000';

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
  return axios.get(
    `${BASE_URL}/api/applications/`,
    await getAuthenticationHeader()
  );
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

export async function getAllLogs(applicationId) {
  return axios.get(
    `${BASE_URL}/api/logs/${applicationId}`,
    await getAuthenticationHeader()
  );
}
