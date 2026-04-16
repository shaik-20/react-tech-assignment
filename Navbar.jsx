import { Link } from "react-router-dom";
import collegeLogo from "../images/collegeLogo.png";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <img
          src={collegeLogo}
          className="logo"
          alt="College logo"
          width="200"
          height="80"
        />
        <h1>Tech Valley College</h1>
        <em className="italic">Empowering Future Innovators Since 1995</em>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/faculty">Faculty</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
