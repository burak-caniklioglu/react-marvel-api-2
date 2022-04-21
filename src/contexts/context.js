import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import i18n from 'i18next'

const CharacterContext = React.createContext();

const CharacterProvider = ({ children }) => {
  const [data, setData] = useState({ res: [], total: 0 });
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  
  const [isLang,setIsLang] = useState('tr')

  const [totalPage, setTotalPage] = useState([]);
  const hash = "0b3b8996d2019d3f5e64dfcc68f7e757";

  const navigate = useNavigate();
  const moreClick = (item) => {
    navigate('/details/'+ item.id, {state: {item}});
  }
  const changeLang = (item) => {
    setIsLang(item)
    i18n.changeLanguage(item)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        let getCards = sessionStorage.getItem("characters");
        let total = sessionStorage.getItem("total");

        if (getCards) {
          if (total) {
            setTotalPage([]);
            for (let i = 0; i < +total; i++) {
              totalPage.push(i);
            }
            setTotalPage(totalPage);
          }

          getCards = JSON.parse(getCards);
          if (getCards[offset]) {
            setData({ ...data, res: getCards[offset] });
          } else {
            setLoading(true);

            const response = await axios.get(
              `https://gateway.marvel.com/v1/public/characters?limit=12&offset=${
                offset * 12
              }&ts=1&apikey=75ff82aee4aef7e1bdb522eea36271d4&hash=${hash}`
            );
            setData({ res: response.data.data.results, total: response.data.data.total });
            sessionStorage.setItem('characters', JSON.stringify({...getCards, [offset]: response.data.data.results}));
            
            setLoading(false);
          }
        } else {
          const response = await axios.get(
            `https://gateway.marvel.com/v1/public/characters?limit=12&offset=${
              offset * 12
            }&ts=1&apikey=75ff82aee4aef7e1bdb522eea36271d4&hash=${hash}`
          );
          const data = response.data.data.results;
          const total = response.data.data.total;

          const totalpage = Math.ceil(total / 12);
          sessionStorage.setItem("total", totalpage);
          for (let i = 0; i < totalpage; i++) {
            totalPage.push(i);
          }
          setTotalPage(totalPage);
          sessionStorage.setItem(
            "characters",
            JSON.stringify({ [offset]: data })
          );
          setData({ res: data, total: totalpage });
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [offset]);

  

  return (
    <CharacterContext.Provider
      value={{
        data,
        totalPage,
        offset,
        setOffset,
        loading,
        moreClick,
        changeLang,
        isLang,
        setIsLang
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

function useCharacter() {
  return useContext(CharacterContext);
}

export { CharacterContext, CharacterProvider, useCharacter };
