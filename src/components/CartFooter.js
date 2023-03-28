import { Button, Divider, Grid } from "@material-ui/core";

function CartFooter(props) {
  const { emptyCart, cartItems } = props;

  function getTotal() {
    let total = 0;
    cartItems.map((item) => (total = total + item.price * item.quantity));
    return total;
  }

  return (
    <>
    <Grid container>
      <Grid item xs={1}>
        
      </Grid>
      <Grid item xs={4}>
    
      </Grid>
      <Grid item xs={4}>
        Total
      </Grid>
      <Grid item xs={3}>
        Rs {getTotal()}
      </Grid>
    </Grid>
    <Divider style={{backgroundColor: "grey", margin: '10px 0px'}}/>
      {cartItems.length > 0 && (
        <Button variant="contained"  className="button-capitalize" id="empty-cart-btn" onClick={() => emptyCart()}>Empty Cart</Button>
      )}
    </>
  );
}
export default CartFooter;
