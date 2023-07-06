import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import CartIcon from "@material-ui/icons/AddShoppingCartSharp";
import React, { useState } from "react";
import { gql, useMutation, useQuery} from '@apollo/client';

const GET_DATA_QUERY = gql`
query GetCart($id: ID!){
  cart(id: $id){
    id
    cartItems{
      id
      itemId
      quantity
      item{
        id
        name
        price
      }
    }
    total
  }
  }
`;

const UPDATE_OR_CREATE_CART_ITEM = gql`
  mutation updateOrCreateCartItem($cartId: Int!, $itemId: Int!) {
    updateOrCreateCartItem(cartId: $cartId, itemId: $itemId) {
      id
      itemId
      quantity
    }
  }
`;

const Item = (props) => {
  const { cartId, categories} = props;
  const [anchorElArray, setAnchorElArray] = useState(Array(categories.length).fill(null));



  console.log(categories);

  const [updateOrCreateCartItem] = useMutation(UPDATE_OR_CREATE_CART_ITEM, {
    refetchQueries: [{ query: GET_DATA_QUERY, variables: { id: parseInt(cartId) } }]
  });
  
  console.log("in th cart item", cartId);
  const { loading, error, data } = useQuery(GET_DATA_QUERY, {
    variables: { id: parseInt(cartId) },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;


  const handleMenuOpen = (event, index) => {
    let newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  const handleMenuClose = (index) => {
    let newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  async function addItem(item) {
    const result = await updateOrCreateCartItem({ variables: { cartId: parseInt(cartId), itemId: parseInt(item.id) } });
    console.log(result)
  }


  return (
    <Grid container item xs style={{ padding: 10 }}>
      {categories?.map((categoryGroup, index) => (
        <Grid item xs={12} sm={12} md={4} lg={3} key={categoryGroup[0].category.id} style={{ padding: 10 }}>
          <Card raised onMouseEnter={(event) => handleMenuOpen(event, index)} onMouseLeave={() => handleMenuClose(index)}>
            <div style={{ padding: 10 }}>
              <CardMedia
                className="cardImage"
                style={{ height: "90px", objectFit: "contain" }}
                component="img"
                image={''}
              />
            </div>
            <CardContent style={{ padding: 5 }}>
              <Typography variant="h6">{categoryGroup[0].category.name}</Typography>
              <Typography variant="body2">{categoryGroup.length} items</Typography>
            </CardContent>
            <Menu
            anchorEl={anchorElArray[index]}
            open={Boolean(anchorElArray[index])}
            onClose={() => handleMenuClose(index)}
          >
            {categoryGroup.map((item) => (
              <MenuItem key={item.id} onClick={() => addItem(item)}>
                <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" style={{ flexGrow: 0, paddingLeft: 20}}>
                  Rs. {item.price}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
          </Card>

        </Grid>
      ))}
    </Grid>
  );
};

export default Item;
