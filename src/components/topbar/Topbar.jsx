import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            iconic.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+27 670 766 376</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>mugwagwaprosper89@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
