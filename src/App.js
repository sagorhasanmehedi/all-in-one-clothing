import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Aboutuspage from './pages/Aboutuspage'
import Ourservicepage from "./pages/Ourservicepage"
import Productspage from "./pages/Productspage";
import Contactuspage from "./pages/Contactuspage";

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
    </Router>
  );
}

export default App;
