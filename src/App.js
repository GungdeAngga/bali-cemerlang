import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./view/landingPage/LandingPage";
import AboutUs from "./view/aboutUs/AboutUs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
