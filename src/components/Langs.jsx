import React from 'react'
import LangItem from './LangItem'
import { useCharacter } from '../contexts/context'

function Langs() {
  const { isLang,setIsLang } = useCharacter();
  const lang = [ 'fr', 'en', 'tr' ]
  return (
    <div className='langs'>
      {
        lang.map((item, index) => {
          return (
            <>
              <LangItem key={index} item = {item} isLang={isLang} setIsLang={setIsLang}/>
            </>
          )
        })
      }
    </div>
  )
}

export default Langs