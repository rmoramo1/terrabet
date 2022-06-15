import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/header.js';
import { Footer } from './components/footer.js';
import injectContext from "./store/appContext";

import { Home } from './pages/home.js';
import { Nascar_Race } from './lineas/nascar/race/nascar_race.js';
import { Moto_GP_Race } from './lineas/moto_gp/race/moto_gp_race.js';
import { Box_Event } from './lineas/box/events/box_event.js';
import { Mma_Event } from './lineas/mma/events/mma_event.js';
import Golf_Lines from './lineas/golf/golf_lines.js';
function App() {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nascar_race/:theid" element={<Nascar_Race/>} />
          <Route path="/moto_gp_race/:theid" element={<Moto_GP_Race/>} />
          <Route path="/box_event/:theid" element={<Box_Event/>} />
          <Route path="/mma_event/:theid" element={<Mma_Event/>} />
          <Route path="/golf_lines/:theid" element={<Golf_Lines/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default injectContext(App);
