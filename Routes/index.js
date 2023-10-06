import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import Gallery from "../Pages/Gallery";
import Pinturas from "../Pages/Pinturas/painting";
import PaintingDetails from "../Pages/PaintingDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export default function RoutesCreate() {
  return(
    <BrowserRouter basename="/van-gogh-universe">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/galeria" element={ <Gallery /> } />
        <Route path="/pinturas" element={ <Pinturas /> } />
        <Route path="/details/:id" element={ <PaintingDetails /> }/>
        <Route path="/sobre" element={ <About /> }/>
        <Route path="/contato" element={ <Contact /> }/>
      </Routes>
    </BrowserRouter>  
  )
}