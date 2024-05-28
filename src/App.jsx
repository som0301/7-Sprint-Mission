import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "/src/components/header/Header";

import "/src/styles/Reset.css";
import "./App.css";
import "/src/styles/Button.css";

import Items from "./Items";
import NotFound from "./NotFound";
import AddItem from "./AddItem";
import { ResponsiveProvider } from "./Responsive";

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveProvider>
          <Header />
          <Routes>
            <Route path="/items" element={<Items />}></Route>
            <Route path="/additem" element={<AddItem />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </ResponsiveProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
