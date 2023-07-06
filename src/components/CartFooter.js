import { Button, Divider, Grid } from "@material-ui/core";
import { gql, useMutation, useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";


const GET_DATA_QUERY = gql`
query GetCart($id: ID!){
  cart(id: $id){
    id
    cartItems{
      id
      item{
        id
        name
        price
      }
      quantity
    }
    total
  }
  }
`;

const DELETE_ALL_CART_ITEM = gql`
  mutation deleteAllCartItems($cartId: Int!) {
    deleteAllCartItems(cartId: $cartId)
  }
`;

const CREATE_RECEIPT = gql`
  mutation createReceipt($storeId: Int!) {
    createReceipt(storeId: $storeId){
      id
      orderSummary
    }
  }
`;

function CartFooter(props) {
  const { cartId, storeId} = props;
  const navigate = useNavigate();
  const [deleteAllCartItem] = useMutation(DELETE_ALL_CART_ITEM, {
    refetchQueries: [{ query: GET_DATA_QUERY, variables: { id: parseInt(cartId) } }]
  });
  const [createReceipt] = useMutation(CREATE_RECEIPT, {
    refetchQueries: [{ query: GET_DATA_QUERY, variables: { id: parseInt(cartId) } }]
  });

  console.log("in th cart item", cartId);
  const { loading, error, data } = useQuery(GET_DATA_QUERY, {
    variables: { id: parseInt(cartId) },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const total = data.cart.total;
  console.log(total);


  async function deleteAllItems() {
    const result = await deleteAllCartItem({ variables: { cartId: parseInt(cartId) } });
    console.log(result)
  }

  async function checkout() {
    const result = await createReceipt({ variables: { storeId: parseInt(storeId) } });
    console.log(result)
    const id = result.data.createReceipt.id
    navigate(`/receipts/${id}`);
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
        Rs {total}
      </Grid>
    </Grid>
    <Divider style={{backgroundColor: "grey", margin: '10px 0px'}}/>
      {total > 0 && (
        <>
        <Button variant="contained"  className="button-capitalize" id="empty-cart-btn" onClick={() => deleteAllItems()}>Empty Cart</Button>
        <Button variant="contained"  className="button-capitalize" id="checkout-btn" onClick={() => checkout()}>Checkout</Button>
        </>
     )}
    </>
  );
}
export default CartFooter;
