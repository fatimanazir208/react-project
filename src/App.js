import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import AllStores from "./components/AllStores"
import Category from "./components/Category"
import CreateItem from "./components/CreateItem";
import Receipt from "./components/Receipt";
import { itemsData } from "./data";
import { useState } from "react";
import { Grid } from "@material-ui/core";

// import ExchangeRatesPage from './ExchangeRatesPage';

import LoginUser from "./components/LoginUser";




const authenticateUser = () => {
  const token = localStorage.getItem('authenticityToken');
  if (token !== null){
    return true
  }
  else 
    return false;
};

const App = () => {
  const [items, setItems] = useState(itemsData);
  const [isLoggedIn, setIsLoggedIn] = useState(authenticateUser);
  

  let getRootElement;
  if (isLoggedIn) {
    getRootElement = <Navigate to="/stores" />;
  } else {
    getRootElement= <LoginUser isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>;
  }


  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Grid item xs={12} style={{ height: "calc(100vh - 60px)" }}>
        <Routes>
          <Route path="stores" element={<AllStores/>}/>
          <Route path="stores/:id" element={<Store/>}/>
          <Route path="categories/:id" element={<Category items={items} />}/>
          <Route path="login" element={<LoginUser isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="receipts/:id" element={<Receipt/>}/>
          <Route path="/*" element={getRootElement} />
          <Route
            path="new/item"
            element={<CreateItem items={items} setItems={setItems} />}
          />
        </Routes>
      </Grid>
      
      
    {/* <ExchangeRatesPage /> */}
 
    </>
  );
}

export default App;
