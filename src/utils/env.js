const liveHost = "https://us-central1-meals-to-go-749bd.cloudfunctions.net";
const localHost = "http://127.0.0.1:5001/meals-to-go-749bd/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
