import axios from "axios";
// const BASE_URL = "https://logwithease.servebeer.com";
// const BASE_URL = "https://cors-anywhere.herokuapp.com/https://logwithease.servebeer.com/"
// const BASE_URL = "https://aoaivbchhe.sharedwithexpose.com";
// const BASE_URL = "http://95.216.146.201/"

import { BASE_URL } from "./BASE_URL";

//already regret doing it, but need to finish the project faset
let counter = 0;

function incrementCounter() {
  counter++;
  console.log("counter for debugging: ", counter);
}

export function getBearerToken() {
  //some black magic for the time being
  const token = localStorage.getItem("token");
  if (token === null) throw new Error("bearer token gone!");
  return `Bearer ${token}`;
}

export async function getAuthenticationHeader() {
  // console.log("get bearer token: ", getBearerToken());
  const config = {
    headers: {
      Authorization: getBearerToken(),
    },
  };
  incrementCounter();

  try {
    //second parameter is data, third parameter is header
    if (counter % 100 === 0) {
      const response = await axios.post(
        `${BASE_URL}/api/auth/refresh`,
        {},
        config
      );
      //if token is invalid, destroy!

      if (response.status === 200) {
        localStorage.setItem("token", response.data.access_token);
      }
    }

    // console.log("response: ", response);
    //TODO: need to handle 429(too many request as well)

    return {
      headers: { Authorization: getBearerToken() },
    };
  } catch (e) {
    console.log("ERROR: getAuthToken: ", e.response);
    localStorage.removeItem("token");
    throw new Error("not authenticated");
  }
}
