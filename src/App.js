import React from 'react';
import Router from './router/Router';
import Marvel from './constants/Marvel';
import { CharacterProvider } from './contexts/context';
import  useWindowSize  from './hooks/useWindowSize';


function App() {
  const [width, ] = useWindowSize();
  return (
    <div className="App">
      <CharacterProvider>
        <Marvel width = {width}/>
        <Router />
      </CharacterProvider>
    </div>
  );
}

export default App;
