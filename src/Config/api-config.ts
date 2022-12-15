let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = process.env.BACK_END_HOST_LOCAL;
}

export const API_BASE_URL = `${backendHost}`;
