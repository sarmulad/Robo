import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from './Pages/Home'
import Benefit from './Pages/Benefit';

function App() {
  return (

    <Router>
       <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Benefit" element={<Benefit/>} />
          </Routes>
          <Footer/>
       </ScrollToTop>
    </Router>
  );
}

export default App;
