import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import firebase from "firebase/compat/app";
import { ThemeProvider } from "styled-components";
import {
  useFonts as UseOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as UseLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBQu1vj5t-tMlB2RTihFaEs5n8iLQ7cyuA",
  authDomain: "meals-to-go-749bd.firebaseapp.com",
  projectId: "meals-to-go-749bd",
  storageBucket: "meals-to-go-749bd.appspot.com",
  messagingSenderId: "216457980368",
  appId: "1:216457980368:web:2ad931bdc73efd07fdf1d5",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export default function App() {
  const [oswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
