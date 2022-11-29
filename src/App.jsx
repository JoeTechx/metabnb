import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PlaceToStay from "./pages/PlaceToStay/PlaceToStay";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="placetostay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
