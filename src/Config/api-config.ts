const hostname = window && window.location && window.location.hostname;

const backendConfig = {
  backendHost:
    hostname === "localhost"
      ? process.env.REACT_APP_BACKEND_LOCAL
      : process.env.REACT_APP_GCP_API_SERVER,
  fileserverHost:
    hostname === "localhost"
      ? process.env.REACT_APP_FILESERVER_LOCAL
      : "wassup",
};

export default backendConfig;
