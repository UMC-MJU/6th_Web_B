import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/main';
import Navbar from './component/Navbar';

import TopRated from './component/TopRated'; 
import Popular from './component/Popular'; 
import UpComing from './component/UpComing'; 

function App() {
  return (
      <div>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/UpComing" element={<UpComing />} />
        </Routes>
      </div>
  );
}

export default App;
