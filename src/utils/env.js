import { Platform } from "react-native";

export const liveHost =
  "https://us-central1-meals-to-go-749bd.cloudfunctions.net";
export const localHost = "http://127.0.0.1:5001/meals-to-go-749bd/us-central1";
export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const isMock = true;
