import React, { useContext,useState, useEffect } from 'react';
import axios from 'axios';

const CharacterContext = React.createContext();

const CharacterProvider = ({children}) => {
    const [data, setData] = useState({ res:[], total: 0 });
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const hash= '0b3b8996d2019d3f5e64dfcc68f7e757';
    const url = `https://gateway.marvel.com/v1/public/characters?limit=12&offset=${offset * 12}&ts=1&apikey=75ff82aee4aef7e1bdb522eea36271d4&hash=${hash}`

    useEffect(() => {
        try {
            const getCharacter = JSON.parse(sessionStorage.getItem('character')) || [];
            const getTotal = sessionStorage.getItem('total') || 0;
            const apiFetch = async () => {
                const response = await axios.get(url);
                sessionStorage.setItem('character', JSON.stringify({
                    ...getCharacter,
                    [offset]: [...response.data.data.results],
                
                  }));

                sessionStorage.setItem('total', response.data.data.total);
            }
            if(getCharacter[offset]){
                setData({res: [...getCharacter[offset]], total: getTotal});
                setLoading(false);
            }else{
                setLoading(true);
                apiFetch();
                setData({res: [...getCharacter[offset]], total: getTotal});
            }   
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
        
}, [offset])
    


    
    
    

    
    
    
    
    

    return(
        <CharacterContext.Provider
        
        >
            {children}
        </CharacterContext.Provider>
    )
}

function useCharacter() {
    return useContext(CharacterContext);
}

export {CharacterContext, CharacterProvider, useCharacter};