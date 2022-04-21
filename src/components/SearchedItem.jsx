import React from 'react'
import { useCharacter } from '../contexts/context'
import { useTranslation } from "react-i18next";

function SearchedItem({ item, character }) {
  const { t } = useTranslation();
  const { moreClick } = useCharacter();
  return (
    <div onClick={() => moreClick(item)}>
      {character 
      ? <>{t('character.name')}: {item.name}</>
      : <>{item.name}</>
      }
    </div>
  )
}

export default SearchedItem