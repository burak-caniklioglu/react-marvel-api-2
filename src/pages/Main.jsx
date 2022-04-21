import React from "react";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import "../styles/Main.css";
import SearchbarArea from "../components/SearchbarArea";

function Main() {
  return (
    <div>
      <SearchbarArea />
      <Cards />
      <Pagination />
    </div>
  );
}

export default Main;
