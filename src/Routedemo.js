import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Apilearn from "./Apilearn";
import App from "./App";
import Fixtures from "./Fixtures";

export default function Routedemo() {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-red-600 py-2 flex flex-row   ">
          <div>
            <Link
              to="/"
              className="text-white ml-5 hover:border-b-4 hover:text-blue-600 border-white   "
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/score"
              className="ml-5 text-white hover:border-b-4 border-white hover:text-blue-600     "
            >
              ScoreBord
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Apilearn />} />
          <Route path="/score" element={<App />}></Route>
          <Route path="/fixtures/:id" element={<Fixtures />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
