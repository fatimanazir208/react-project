import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

function CartArea(props) {
  const { addItem, removeItem, decrementItem, emptyCart, cartItems } = props;

  return (
    <div id="cart-area" className="col-5 col-sm-7 col-md-6 col-lg-5 pt-2">
      <h3 className="text-center mb-5">Cart</h3>
      <CartHeader />
      <CartItem
        cartItems={cartItems}
        removeItem={removeItem}
        addItem={addItem}
        decrementItem={decrementItem}
      />
      <CartFooter cartItems={cartItems} emptyCart={emptyCart} />
    </div>
  );
}

export default CartArea;
