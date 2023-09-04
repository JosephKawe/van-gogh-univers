import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import Galery from "../Pages/Galery";
import Pinturas from "../Pages/Pinturas/painting";
import PaintingDetails from "../Pages/PaintingDetails";

export default function RoutesCreate() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/galeria" element={ <Galery /> } />
        <Route path="/pinturas" element={ <Pinturas /> } />
        <Route path="/details/:id" element={ <PaintingDetails /> }/>
      </Routes>
    </BrowserRouter>  
  )
}