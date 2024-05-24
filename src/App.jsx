import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import Header from "/src/components/header/Header";
import BestProductsList from "./components/BestProductsList";
import { getProducts } from "./components/api/api";

import "/src/styles/Reset.css";
import "./App.css";
import AllProductsList from "./components/AllProductsList";
import "/src/styles/Button.css";

import Items from "./Items";
import NotFound from "./NotFound";
import AddItem from "./AddItem";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowSize < 768 ? true : false);

  window.onresize = () => {
    setWindowSize(window.innerWidth);
    setIsMobile(windowSize < 768 ? true : false);
  };

  return (
    <>
      <BrowserRouter>
        <Header isMobile={isMobile} />
        <Routes>
          <Route path="/items" element={<Items isMobile={isMobile} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/additem" element={<AddItem />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
