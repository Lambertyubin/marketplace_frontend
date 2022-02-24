import "./App.css";
import React, { useEffect } from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import WebFont from "webfontloader";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  });

  return (
    <BrowserRouter>
      <Header />
      <MainRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
