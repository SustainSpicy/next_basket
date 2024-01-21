// app/pages/_app.js
import "../styles/globals.css";
import MainProvider from "@/Provider";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
