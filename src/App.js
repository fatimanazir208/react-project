import './App.css';
import { useState } from 'react';
import Item from "./components/Item";
import CartHeader from "./components/CartHeader"
import CartItem from "./components/CartItem"
import CartFooter from "./components/CartFooter"
import {items} from './components/data.js';

let nextID = 0;


function App() {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  
  function addItem(id){
    setIsEmpty(false);
    const index = cartItems.findIndex((item) => item.itemId === id);
    if (index !== -1) {
      const newData = [...cartItems]
      newData[index].quantity = cartItems[index].quantity + 1;
      setCartItems(newData);
      setTotal(total+newData[index].price);
    } else {
      const item = items[id];
      cartItems.push({
        id: nextID++,
        itemId: item.id,
        title: item.title,
        price: item.price,
        quantity: 1
      });
      setTotal(total+item.price);
    }
  }

  function emptyCart(){
    setIsEmpty(true);
    setCartItems([]);
    setTotal(0); 
  }
  
  function removeItem(id){
    if(cartItems.length == 1){
      emptyCart();
    }
    else{
    const index = cartItems.findIndex((item) => item.itemId === id);
    setTotal(total-(cartItems[index].quantity * cartItems[index].price));
    const updatedCartItems = cartItems.filter(item => item.itemId !== id);
    setCartItems(updatedCartItems);
    }
  }

  function decrementItem(id){
    const index = cartItems.findIndex((item) => item.itemId === id);
    if(cartItems[index].quantity == 1){
      removeItem(id);
    }
    else{
      setTotal(total-cartItems[index].price);
      const updatedCartItems = [...cartItems]
      updatedCartItems[index].quantity = cartItems[index].quantity - 1;
      setCartItems(updatedCartItems);
    }
  }


  return ( 
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">E-mart</a>
        </div>
      </nav>
      <div className="row m-0 pt-3">
        <div className="col-7 col-sm-5 col-md-6 col-lg-7 text-center pt-2">
          <h3 className="text-center mb-5">Items</h3>
          <div className="row row-cols-1 row-cols-xxl-3 row-cols-xl-2 row-cols-md-1">
            <Item addToCart={addItem}/>
          </div>
        </div>
        <div id="cart-area" className="col-5 col-sm-7 col-md-6 col-lg-5 pt-2">
          <h3 className="text-center mb-5">Cart</h3>
          <CartHeader />
          <CartItem cartItems={cartItems} removeItem={removeItem} addItem={addItem} decrementItem={decrementItem}/>
          <CartFooter total={total} emptyCart={emptyCart} isEmpty={isEmpty} />
        </div>
      </div>
    </>
    )
}

export default App;
