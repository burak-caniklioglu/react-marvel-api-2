import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Details.css";

function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  return (
    <div className="detail">
      <div className="hero-container">
        <div className="super-hero">
          <div className="hero-img-area">
            <img
              src={
                `${item.thumbnail.path}.${item.thumbnail.extension}` ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                  ? "https://play-lh.googleusercontent.com/yPjQKHUAIx7XQnvil2HpxCsjHhUADM4hc6TlcIWeEt8DU8vnM1gFC7jWh-OJ60cihw"
                  : `${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`
              }
              alt={item.name}
            />
          </div>
          <div className="hero-info-area">
            <h1 className="hero-name">{item.name}</h1>
            <p className="hero-desc">{item.description}</p>
            <div className="series-stories">
              <div className="series">
                <h2>Series</h2>
                <ul>
                  {item.series.items?.slice(0, 5).map((serie) => {
                    return <li key={serie.index}>{serie.name}</li>;
                  })}
                </ul>
              </div>
              <div className="stories">
                <h2>Stories</h2>
                <ul>
                  {item.stories.items?.slice(0, 5).map((serie) => {
                    return <li key={serie.index}>{serie.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back">
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default Details;
