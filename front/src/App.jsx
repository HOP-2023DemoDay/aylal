import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Hutulbur from "./pages/Hutulbur";
import CompanyInfo from "./pages/CompanyInfo";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
 
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/CompanyInfo" element={<CompanyInfo />}></Route>
        <Route path="/Hutulbur" element={<Hutulbur />}></Route>
        <Route path="/CompanyInfo" element={<CompanyInfo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
