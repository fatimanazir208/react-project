import "./App.css";
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CreateItem from "./components/CreateItem";
import { data } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState(data);

  useEffect(() => {
    console.log("use effect")
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Cart items={items}/> }/>
        <Route path="new/item" element={ <CreateItem items={items} setItems={setItems}/> } />
      </Routes>
    </>
  );
}

export default App;
