import axios from "axios";
import { getAuthenticationHeader } from "./Auth/authenticatedChecker";
import {BASE_URL} from './Auth/BASE_URL';

// const BASE_URL = "https://logwithease.servebeer.com";
// const BASE_URL = "https://cors-anywhere.herokuapp.com/https://logwithease.servebeer.com/"
// const BASE_URL = "https://aoaivbchhe.sharedwithexpose.com";

// const BASE_URL = "http://95.216.146.201"

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

export async function getLogCount(applicationId) {
  return axios.get(
    `${BASE_URL}/api/logs/count/${applicationId}`,
    await getAuthenticationHeader()
  );
}

export async function getLatestLogByCount(applicationId, count) {
  return axios.get(
    `${BASE_URL}/api/logs/${applicationId}/${count}`,
    await getAuthenticationHeader()
  );
}
