import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Aboutuspage from './pages/Aboutuspage'
import Ourservicepage from "./pages/Ourservicepage"
import Contactuspage from "./pages/Contactuspage";
import Footer from "./components/footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import MenCollection from "./components/products/menCollection/MenCollection";
import BoysCollection from "./components/products/boysCollection/BoysCollection";
import InfantsCollection from "./components/products/infantsCollection/InfantsCollection";
import WomenCollection from "./components/products/womenCollection/WomenCollection";
import GirlsCollection from "./components/products/girlsCollection/GirlsCollection";
import Header from "./components/heder/Header";

function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<Aboutuspage />} />
        <Route path="/ourservices" element={<Ourservicepage />} />
        <Route path="/contactus" element={<Contactuspage />} />
        <Route path="/menCollection" element={<MenCollection />} />
        <Route path="/boysCollection" element={<BoysCollection />} />
        <Route path="/infantsCollection" element={<InfantsCollection />} />
        <Route path="/womenCollection" element={<WomenCollection />} />
        <Route path="/girlsCollection" element={<GirlsCollection />} />
      </Routes>
      <Footer/>
      <ScrollToTop smooth  style={{color:"blue",marginBottom:"40px"}}/>
    </Router>
  );
}

export default App;
