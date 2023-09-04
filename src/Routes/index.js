import React from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Galery from "../Pages/Galery";
import Pinturas from "../Pages/Pinturas/painting";
import PaintingDetails from "../Pages/PaintingDetails";

export default function RoutesCreate() {
  return(
    <HashRouter basename="/van-gogh-univers">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/galeria" element={ <Galery /> } />
        <Route path="/pinturas" element={ <Pinturas /> } />
        <Route path="/details/:id" element={ <PaintingDetails /> }/>
      </Routes>
    </HashRouter>  
  )
}