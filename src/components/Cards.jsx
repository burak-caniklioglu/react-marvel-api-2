import React from "react";
import CardItem from "./CardItem";
import { useCharacter } from "../contexts/context";

function Cards() {
  const { data, loading } = useCharacter();
  return (
    <div id="image-area">
      {
        loading && <div className='loading'><span>Loading</span></div>
      }
      <div className="container">
        {data?.res.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
