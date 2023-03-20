import "./App.css";

import { useState } from "react";
import { items } from "./components/data.js";
import Navbar from "./components/Navbar";
import ItemsArea from "./components/ItemsArea";
import CartArea from "./components/CartArea";

let nextID = 0;

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItem(id) {
    const index = cartItems.findIndex((item) => item.itemId === id);
    if (index !== -1) {
      const newData = [...cartItems];
      newData[index].quantity = cartItems[index].quantity + 1;
      setCartItems(newData);
    } else {
      let itemsArray = [...cartItems];
      const item = items[id];
      const newData = {
        id: nextID++,
        itemId: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
      };
      itemsArray.push(newData);
      setCartItems([...itemsArray]);
    }
  }

  function emptyCart() {
    setCartItems([]);
  }

  function removeItem(id) {
    if (cartItems.length === 1) {
      emptyCart();
    } else {
      const updatedCartItems = cartItems.filter((item) => item.itemId !== id);
      setCartItems(updatedCartItems);
    }
  }

  function decrementItem(id) {
    const index = cartItems.findIndex((item) => item.itemId === id);
    if (cartItems[index].quantity === 1) {
      removeItem(id);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = cartItems[index].quantity - 1;
      setCartItems(updatedCartItems);
    }
  }

  return (
    <>
      <Navbar />
      <div className="row m-0 pt-3">
        <ItemsArea addItem={addItem} />
        <CartArea
          addItem={addItem}
          removeItem={removeItem}
          decrementItem={decrementItem}
          emptyCart={emptyCart}
          cartItems={cartItems}
        />
      </div>
    </>
  );
}

export default App;
