import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import CreateItem from "./components/CreateItem";
import { data } from "./data";
import { useState } from "react";
import { Grid } from "@material-ui/core";

function App() {
  const [items, setItems] = useState(data);

  return (
    <>
      <Navbar />
      <Grid item xs={12} style={{ height: "calc(100vh - 60px)" }}>
        <Routes>
          <Route path="/" element={<Cart items={items} />} />
          <Route
            path="new/item"
            element={<CreateItem items={items} setItems={setItems} />}
          />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
