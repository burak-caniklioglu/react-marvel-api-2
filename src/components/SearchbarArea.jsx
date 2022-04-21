import React from "react";
import Searchbar from "../components/Searchbar";
import Langs from "./Langs";
import { useTranslation } from "react-i18next";

function SearchbarArea() {
  const { t } = useTranslation();
  return (
    <>
      <div className="searchbar-area">
      <label htmlFor="input">{t('searchbar.label')}</label>
        <div className="searchbar-container">
          <Searchbar />
          <div>
            <Langs />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchbarArea;
