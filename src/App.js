import React from 'react';
import './App.css';
import { CharacterProvider } from './contexts/context';
import first_image from './images/all.png';


function App() {
  return (
    <div className="App">
      <CharacterProvider>
        
      </CharacterProvider>
    </div>
  );
}

export default App;
