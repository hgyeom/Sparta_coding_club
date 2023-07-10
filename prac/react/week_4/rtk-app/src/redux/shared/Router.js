import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../pages/Main";
import Login from "../../pages/Login";
import Join from "../../pages/Join";
import Write from "../../pages/Write";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
