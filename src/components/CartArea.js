import { Grid, Typography } from "@material-ui/core";

import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

function CartArea(props) {
  const { addItem, removeItem, decrementItem, emptyCart, cartItems } = props;

  return (
    <>
      <Grid item xs={12}>
        <Typography id="heading">Cart</Typography>
        <Grid xs={12}>
          <CartHeader />
        </Grid>
        <Grid xs={12}>
          <CartItem
            cartItems={cartItems}
            removeItem={removeItem}
            addItem={addItem}
            decrementItem={decrementItem}
          />
        </Grid>
        <Grid xs={12}>
          <CartFooter cartItems={cartItems} emptyCart={emptyCart} />
        </Grid>
      </Grid>
    </>
  );
}

export default CartArea;
