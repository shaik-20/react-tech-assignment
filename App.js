import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Courses from "./component/Courses";
import Faculty from "./component/Faculty";
import Admissions from "./component/Admissions";
import Contact from "./component/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="footer">
        <p>
          © 2024 Tech Valley College. All Rights Reserved.
          <br />
          Email: <a href="mailto:info@techvalley.edu">info@techvalley.edu</a>
          <br />
          Phone: <a href="tel:+91 123-456-7890">+91 123-456-7890</a>
        </p>
      </div>
    </div>
  );
}

export default App;
