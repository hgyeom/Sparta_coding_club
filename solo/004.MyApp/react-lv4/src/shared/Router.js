import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Header from "../components/Header/Header";
import Write from "../pages/Write";
import Modify from "../pages/Modify";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/modify/:id" element={<Modify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default Router;
