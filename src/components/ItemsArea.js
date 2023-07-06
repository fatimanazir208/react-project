import { Grid, Typography } from "@material-ui/core";
import { useEffect} from "react";
import { gql, useMutation} from '@apollo/client';
import Item from "./Item";


const GET_OR_CREATE_CART = gql`
  mutation getOrCreateCart($storeId: Int!) {
    getOrCreateCart(storeId: $storeId) {
      id
      store{
        name
      }
    }
  }
`;

function ItemsArea(props) {
  const {categories, storeId} = props;

  const [getOrCreateCart, { loading, error, data }] = useMutation(GET_OR_CREATE_CART, {
    variables: { storeId: parseInt(storeId) },
  });

  useEffect(() => {
    getOrCreateCart({ variables: { storeId: parseInt(storeId) }});
  }, [getOrCreateCart, storeId]);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const cartId = data?.getOrCreateCart?.id;
  const storeName = data?.getOrCreateCart?.store?.name;


  return (
    <Grid item xs>
      <Typography id="heading">{storeName}</Typography>
      {cartId && <Item cartId={cartId} categories={categories} />}
    </Grid>
  );
}


export default ItemsArea;
