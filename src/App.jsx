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
  return (
    <>
      <BrowserRouter>
        <Header className="header" />
        <Routes>
          <Route path="/items" element={<Items />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/additem" element={<AddItem />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// TODO: 반응형 모바일 로고 변경
// TODO: 중고마켓 눌렀을때 items로 이동
