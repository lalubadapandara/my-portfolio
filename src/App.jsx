import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import "swiper/css/bundle";

function App() {
  return (
    <Router>
      <div className="overflow-hidden w-full container max-w-7xl mx-auto bg-radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
