import React from "react";

function CardItem({item}) {
  return (
    <div className="cards" key={item.id}>
      <div className="card-container">
        <div className="card">
          <img
            src={
              `${item.thumbnail.path}.${item.thumbnail.extension}` ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                ? "https://play-lh.googleusercontent.com/_6tffbWu8_-pzpMwDgsae41KF-GYec4Uzuvf7-6lS0j67rSqLKZkA8RIhM8v1I4n5w"
                : `${item.thumbnail.path}.${item.thumbnail.extension}`
            }
            alt={item.name}
          />
        </div>
      </div>
      <p>{item.name}</p>
    </div>
  );
}

export default CardItem;
