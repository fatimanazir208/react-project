import { Divider, Grid, IconButton, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/ClearSharp";
import DecrementIcon from "@material-ui/icons/RemoveCircle";
import AddIcon from "@material-ui/icons/AddCircle";

function CartItem(props) {
  const { cartItems, addItem, removeItem, decrementItem } = props;
  return (
    <>
      {cartItems.map((cartItem, index) => (
        <div key={`cart-item-${cartItem.itemId}-$`}>
          <Grid
            container
            item
            xs={12}
            wrap="nowrap"
            style={{ padding: "0px", backgroundColor: "white" }}
          >
            <Grid item xs={1} style={{ margin: "auto" }}>
              <IconButton
                component="span"
                onClick={() => removeItem(cartItem.itemId)}
                style={{ padding: "0px" }}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4} style={{ margin: "auto" }}>
              <Typography>{cartItem.title}</Typography>
            </Grid>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                className={"quantity-btn"}
                onClick={() => decrementItem(cartItem.itemId)}
              >
                <DecrementIcon />
              </IconButton>
              <Typography>{cartItem.quantity}</Typography>
              <IconButton
                className={"quantity-btn"}
                onClick={() => addItem(cartItem.itemId)}
              >
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3} style={{ margin: "auto" }}>
              <Typography>Rs. {cartItem.price}</Typography>
            </Grid>
          </Grid>
          <Divider style={{ backgroundColor: "grey", marginBottom: "10px" }} />
        </div>
      ))}
    </>
  );
}
export default CartItem;
