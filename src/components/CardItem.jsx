import React from "react";
import { useCharacter } from "../contexts/context";
function CardItem({item}) {
  const { moreClick } = useCharacter();
  

  return (
    <div className="cards" key={item.id} onClick = {() => moreClick(item)}>
      <div className="card-container">
        <div className="card">
          <img
            src={
              `${item.thumbnail.path}.${item.thumbnail.extension}` ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                ? "https://play-lh.googleusercontent.com/yPjQKHUAIx7XQnvil2HpxCsjHhUADM4hc6TlcIWeEt8DU8vnM1gFC7jWh-OJ60cihw"
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
