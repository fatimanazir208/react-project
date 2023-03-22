import { useState} from "react";
import ItemsArea from "./ItemsArea";
import CartArea from "./CartArea";

function Cart(props) {
  const {items} = props
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
        id: cartItems.length,
        itemId: item.id,
        title: item.title,
        price: item.price,
        quantity: 1
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
      <div className="row m-0 pt-3">
        <ItemsArea
          addItem={addItem}
          items={items}
         />
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

export default Cart;