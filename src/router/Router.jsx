import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Details from '../pages/Details';
import Main from '../pages/Main';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}

export default Router