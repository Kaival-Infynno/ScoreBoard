import React from "react";
import { BrowserRouter,
    
     Routes, Route,Link} from "react-router-dom";
import Apilearn from "./Apilearn";
import App from "./App";
import Fixtures from "./Fixtures";

export default function Routedemo() {
  return (
    <div >
      <BrowserRouter>
      <div className="bg-red-600 pt-2">
        <Link to="/" className="text-white pl-5">Home</Link>
        <Link to="/score" className="pl-10 text-white">ScoreBord</Link>
        </div>
        <Routes>
          <Route path="/" element={<Apilearn/>} />
          <Route path="/score" element={<App/>}></Route>
          <Route path="/fixtures/:id" element={<Fixtures/>}></Route>
          
        </Routes>
        
      </BrowserRouter>
      

     
    </div>
  );
}
