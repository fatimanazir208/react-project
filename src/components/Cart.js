import { useState} from "react";
import ItemsArea from "./ItemsArea";
import CartArea from "./CartArea";
import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center'
  }
}));

function Cart(props) {
  const classes = useStyles();
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
      <div className={classes.root} style={{margin:'20px 40px'}}>
        <Grid container spacing={3} style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', alignItems: 'stretch' }}>
          <Grid item xs={4} sm={4} md={7} lg={8} style={{ flex: 1}}>
            <Paper className={classes.paper} style={{height:'100%', backgroundColor: "#f0f1e4"}}>
              <ItemsArea
                addItem={addItem}
                items={items}
              />
            </Paper>
          </Grid>
          <Grid item xs={8} sm={8} md={5} lg={4} style={{ flex: 1}}>
            <Paper className={classes.paper} style={{height:'100%', backgroundColor: "#f0f1e4"}}>
              <CartArea
                addItem={addItem}
                removeItem={removeItem}
                decrementItem={decrementItem}
                emptyCart={emptyCart}
                cartItems={cartItems}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );

}

export default Cart;