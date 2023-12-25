import "./App.css";
import About from "./Component/About";
import Contract from "./Component/Contract";

import Home from "./Component/Home";
import SingleProduct from "./Component/SingleProduct";
import QaServiceComponent from "./Component/UseHooks/QaAnalysis";
import Card from "./Component/Card";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ErrorPage from "./Component/ErrorPage";
import { GlobalStyle } from "./Component/Golobalestyle";
import { ThemeProvider } from "styled-components";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Services from "./Component/Services";
import QaService from "./Component/UseHooks/Qaservice";
function App() {
  const theme = {
    colors: {
      bg: "#e9ece9",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contract" element={<Contract />} />
            <Route path="/Services" element={<Services />} />

            <Route path="/SingleProduct/:id" element={<SingleProduct />} />
            <Route path="/Card/:id" element={<Card />} />
            <Route path="/Card/:id" element={<ErrorPage />} />
          </Routes>
          <QaServiceComponent/>
          <QaService/>
          <Contract/>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
