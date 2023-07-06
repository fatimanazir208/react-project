import { useEffect, useState } from "react";
import ItemsArea from "./ItemsArea";
import CartArea from "./CartArea";
import { Grid, Paper } from "@material-ui/core";
import { styles } from "./styles";
import { useParams } from "react-router-dom";
import { gql, useMutation, useQuery } from '@apollo/client';


const GET_OR_CREATE_CART = gql`
  mutation getOrCreateCart($storeId: Int!) {
    getOrCreateCart(storeId: $storeId) {
      id
      storeAssignmentId
      total
    }
  }
`;

const GET_DATA_QUERY = gql`
query getCategory($id: ID!){
  category(id: $id){
    name
    items{
      id
      name
      price
    }
    storeId
  }
  }
`;


function Category() {
  const classes = styles();
  const { id } = useParams();
  const [cartID, setCartID] = useState(null);

  const { loading, error, data } = useQuery(GET_DATA_QUERY, {
    variables: { id: id },
  });

  const [getOrCreateCart] = useMutation(GET_OR_CREATE_CART);


  useEffect(() => {
    console.log("state cart id", cartID)
  }, [cartID]);

  useEffect(() => {
    async function createCart() {
      const store_id = data.category.storeId;
      const result = await getOrCreateCart({ variables: { storeId: store_id } });
      setCartID(result.data.getOrCreateCart.id);
    }
    if (!loading && data) {
      createCart();
    }
  }, [data, getOrCreateCart, loading]);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const items = data.category.items
  const store_id = data.category.storeId

  return (
    <Grid container item xs wrap="nowrap">
      <Grid item xs={4} sm={4} md={7} lg={8} style={{ padding: 10 }}>
        <Paper className={classes.paper}>
          <ItemsArea cartId={cartID} items={items} category={data.category.name}/>
        </Paper>
      </Grid>
      <Grid item xs={8} sm={8} md={5} lg={4} style={{ padding: 10 }}>
        <Paper className={classes.paper}>
        <CartArea
          cartId={cartID} storeId={store_id}
        />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Category;
