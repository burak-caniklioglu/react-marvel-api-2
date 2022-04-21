
import React from 'react'
import { useCharacter } from '../contexts/context'

function LangItem({ item}) {
  const { isLang,changeLang } = useCharacter();

  
  return (
    <button className={isLang === item ? "lang activated" : "lang"} value={item} onClick={(e) => changeLang(e.target.value)} >
        {item.toUpperCase()}
    </button>
  )
}

export default LangItem