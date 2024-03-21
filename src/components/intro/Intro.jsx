import "./intro.scss";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/prosper.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Prosper Mugwagwa</h1>
          <h3>
            Freelance
            <span>
              <TypeAnimation
                sequence={[
                  " Developer",
                  2000,
                  "  Designer",
                  2000,
                  " Content Creator",
                  2000,
                ]}
                repeat={Infinity}
                speed={20}
                deletionSpeed={60}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
