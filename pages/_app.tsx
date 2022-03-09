import React from "react";
import "../styles/app.css";
import "../styles/globals.css";
import Header from "@components/Header";

interface Props {
  Component: any;
  pageProps: unknown;
}

const MyApp: React.FC<Props> = ({Component, pageProps}) => {

  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
