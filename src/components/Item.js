import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import CartIcon from "@material-ui/icons/AddShoppingCartSharp";
import React from "react";

const Item = (props) => {
  const { items, addToCart } = props;
  return (
    <Grid container item xs style={{ padding: 10 }}>
      {items.map((item) => (
        <Grid item xs={4} key={item.id} style={{ padding: 5 }}>
          <Card raised>
            <div style={{ padding: "10px" }}>
              <CardMedia
                className="cardImage"
                style={{ height: "120px", objectFit: "contain" }}
                component="img"
                image={item.img_src}
              />
            </div>
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">Rs. {item.price}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                endIcon={<CartIcon />}
                className="button-capitalize"
                id="add-to-cart-btn"
                fullWidth
                onClick={() => addToCart(item.id)}
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Item;
