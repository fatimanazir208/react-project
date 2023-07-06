import { Divider, Grid, IconButton, Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/ClearSharp";
import DecrementIcon from "@material-ui/icons/RemoveCircle";
import IncrementIcon from "@material-ui/icons/AddCircle";
import { gql, useMutation, useQuery } from '@apollo/client';


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

const INCREMENT_CART_ITEM = gql`
  mutation incrementCartItem($cartId: Int!, $itemId: Int!) {
    incrementCartItem(cartId: $cartId, itemId: $itemId) {
      id
      itemId
      quantity
    }
  }
`;

const DECREMENT_CART_ITEM = gql`
  mutation decrementCartItem($cartId: Int!, $itemId: Int!) {
    decrementCartItem(cartId: $cartId, itemId: $itemId) {
      id
      itemId
      quantity
    }
  }
`;

const DELETE_CART_ITEM = gql`
  mutation deleteCartItem($cartId: Int!, $itemId: Int!) {
    deleteCartItem(cartId: $cartId, itemId: $itemId)
  }
`;



function CartItem(props) {
  const { cartId} = props;
  const [incrementCartItem] = useMutation(INCREMENT_CART_ITEM, {
    refetchQueries: [{ query: GET_DATA_QUERY, variables: { id: parseInt(cartId) } }]
  });
  const [decrementCartItem] = useMutation(DECREMENT_CART_ITEM, {
    refetchQueries: [{ query: GET_DATA_QUERY, variables: { id: parseInt(cartId) } }]
  });
  const [deleteCartItem] = useMutation(DELETE_CART_ITEM, {
    refetchQueries: [{ query: GET_DATA_QUERY, variables: { id: parseInt(cartId) } }]
  });


  console.log("in th cart item", cartId);
  const { loading, error, data } = useQuery(GET_DATA_QUERY, {
    variables: { id: parseInt(cartId) },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const cartItems = data.cart.cartItems;
  console.log(cartItems);


  async function incrementItem(item_id) {
    const result = await incrementCartItem({ variables: { cartId: parseInt(cartId), itemId: parseInt(item_id) } });
    console.log(result)
  }

  async function decrementItem(item_id) {
    const result = await decrementCartItem({ variables: { cartId: parseInt(cartId), itemId: parseInt(item_id) } });
    console.log(result)
  }

  async function deleteItem(item_id) {
    const result = await deleteCartItem({ variables: { cartId: parseInt(cartId), itemId: parseInt(item_id) } });
    console.log(result)
  }

 
  
  return (
    <>
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>
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
                onClick={() => deleteItem(cartItem.item.id)}
                style={{ padding: "0px" }}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4} style={{ margin: "auto" }}>
              <Typography>{cartItem.item.name}</Typography>
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
                onClick={() => decrementItem(cartItem.item.id)}
              >
                <DecrementIcon />
              </IconButton>
              <Typography>{cartItem.quantity}</Typography>
              <IconButton
                className={"quantity-btn"}
                onClick={() => incrementItem(cartItem.item.id)}
              >
                <IncrementIcon />
              </IconButton>
            </Grid>
            <Grid item xs={3} style={{ margin: "auto" }}>
              <Typography>Rs. {cartItem.item.price}</Typography>
            </Grid>
          </Grid>
          <Divider style={{ backgroundColor: "grey", marginBottom: "10px" }} />
        </div>
      ))}
    </>
  );
}
export default CartItem;
