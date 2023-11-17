import React from "react";
import "./portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";
import { useState, useEffect } from "react";
import {
  featuredPortFolio,
  webPortfolio,
  DesignportFolio,
  ContentPortfolio,
} from "../../data";


const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const List = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortFolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(DesignportFolio);
        break;
      case "content":
        setData(ContentPortfolio);
        break;
    }
  }, [selected]);
  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {List.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              id={item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
        <div className="container">
            {data.map((item)=>(
                <div className="item">
                <img src={item.thumbnail} />
                <h3>{item.title.split(" ")[0]}</h3>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
