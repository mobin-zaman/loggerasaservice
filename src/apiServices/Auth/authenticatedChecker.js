import axios from "axios";

export function authenticated() {
  console.log("getting the token: ", localStorage.getItem("token"));
  const result = localStorage.getItem("token");

  return !!result;
  //   return false;
}

export function getBearerToken() {
  return `Bearer ${localStorage.getItem("token")}`;
}

export async function getAuthenticationHeader() {
  console.log("get bearer token: ", getBearerToken());
  const config = {
    headers: { Authorization: getBearerToken() },
  };

  try {
    //second parameter is data, third parameter is header
    const response = await axios.post("/api/auth/refresh", {}, config);

    //if token is invalid, destroy!

    if (response.status === 200) {
      localStorage.setItem("token", response.data.access_token);
    }

    // console.log("response: ", response);

    return {
      headers: { Authorization: getBearerToken() },
    };
  } catch (e) {
    console.log("ERROR: getAuthToken: ", e.response);
    localStorage.removeItem("token");
    throw new Error("not authenticated");
    //TODO: add window.location here
    //window.location="/"
  }
}
