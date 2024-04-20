import "./portfolio.scss";
// import PortfolioList from "../portfolioList/PortfolioList";
// import { useState } from "react";
import groceryList from "../..//Portfolio_Img/grocery_list.png";
import schoolWebsite from "../..//Portfolio_Img/schoolWebsite.png";
import techNotesApp from "../..//Portfolio_Img/techNotes.png";
import weatherApp from "../..//Portfolio_Img/weatherApp.png";
import jokesApp from "../..//Portfolio_Img/jokesApp.png";

/* import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
 */
export default function Portfolio() {
  // const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState([]);
  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  //   {
  //     id: "web",
  //     title: "Web App",
  //   },
  //   {
  //     id: "mobile",
  //     title: "Mobile App",
  //   },
  //   {
  //     id: "design",
  //     title: "Design",
  //   },
  //   {
  //     id: "content",
  //     title: "Content",
  //   },
  // ];

  /*  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]); */

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolioHeading">
        <h1>Portfolio</h1>
      </div>
      <h2 className="portfolioSub">Web Apps and Websites</h2>
      {/*  { <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>} */}

      <div className="container">
        <a
          href="https://ultimate-grocery-list.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item">
            <img src={groceryList} alt="groceryList app" />
            <h3>Grocery List App</h3>
          </div>
        </a>
        <a
          href="https://successcombined.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item">
            <img src={schoolWebsite} alt="groceryList app" />
            <h3>School Website</h3>
          </div>
        </a>
        <a
          href="https://technotes-vgew.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item">
            <img src={techNotesApp} alt="groceryList app" />
            <h3>Technotes App</h3>
          </div>
        </a>
        <a
          href="https://ultimatepweather.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item">
            <img
              src={weatherApp}
              alt="groceryList app"
              className="weatherImg"
            />
            <h3>Weather App</h3>
          </div>
        </a>
        <a
          href="https://prosperjrjokes.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="item">
            <img src={jokesApp} alt="groceryList app" />
            <h3>Jokes App</h3>
          </div>
        </a>

        {/*  {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))} */}
      </div>
    </div>
  );
}
