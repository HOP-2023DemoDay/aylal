import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Hutulbur";
import Hutulbur from "./pages/Hutulbur";
import Home from "./pages/Home";
import CompanyInfo from "./pages/CompanyInfo";
// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/CompanyInfo" element={<CompanyInfo />}></Route>
        <Route path="/Hutulbur" element={<Hutulbur />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
