import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Aboutuspage from './pages/Aboutuspage'
import Ourservicepage from "./pages/Ourservicepage"
import Productspage from "./pages/Productspage";
import Contactuspage from "./pages/Contactuspage";
import Footer from "./components/footer/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutuspage />} />
        <Route path="/ourservices" element={<Ourservicepage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/contactus" element={<Contactuspage />} />
      </Routes>
      <Footer/>
      <ScrollToTop smooth  style={{color:"blue",marginBottom:"40px"}}/>
    </Router>
  );
}

export default App;
