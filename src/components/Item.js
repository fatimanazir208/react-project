import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import CartIcon from '@material-ui/icons/AddShoppingCartSharp';
import React from "react";

class Item extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    const { items, addToCart } = this.props;
    return (
      <>
        {
          items.map((item) => 
          <Grid item xs={12} sm={12} md={6} lg={4} key={item.id} id="items-grid">
            <Card raised style={{width: '100%'}}>
              <div style={{padding:'10px'}}>
              <CardMedia className="cardImage" style={{ height: '120px', objectFit: 'contain' }}
                  component="img"
                  image={item.img_src}
                />
              </div>
              <CardContent>
                <Typography variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rs. {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small" endIcon={<CartIcon />} className="button-capitalize" id="add-to-cart-btn" fullWidth onClick={() => addToCart(item.id)}>Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
          )
        }
      </>
    );
  }
}

export default Item;
