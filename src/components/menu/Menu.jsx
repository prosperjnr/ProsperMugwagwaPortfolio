import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const Menufalse = () => {
    setMenuOpen(false);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={Menufalse}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={Menufalse}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={Menufalse}>
          <a href="#works">Works</a>
        </li>
        <li onClick={Menufalse}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={Menufalse}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
