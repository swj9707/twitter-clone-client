export function RequestBody(api: string, request?: any) {
  const headers: any = {
    "Content-Type": "application/json",
  };
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers["Authorization"] = "Bearer " + accessToken;
  }
  let options: any = {
    headers: headers,
    url: api,
  };
  if (request != null) {
    options["body"] = JSON.stringify(request);
  }
  return options;
}
