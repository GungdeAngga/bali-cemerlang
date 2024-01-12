import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./view/landingPage/LandingPage";
import AboutUs from "./view/aboutUs/AboutUs";
import Packages from "./view/packages/Packages";
import Payment from "./view/payment/PaymentPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Packges" element={<Packages/>}/>
        <Route path="/Payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
