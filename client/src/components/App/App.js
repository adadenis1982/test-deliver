import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Sidebar from '../Sidebar/Sidebar';
import Deliver from '../Deliver/Deliver';

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="deliver" element={<Deliver />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
