export function authenticated() {
  console.log("getting the token: ", localStorage.getItem("token"));
  const result = localStorage.getItem("token");

  return !!result;
  //   return false;
}
