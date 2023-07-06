import { useMutation, gql } from "@apollo/client";
import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

const GET_OR_CREATE_CART = gql`
  mutation getOrCreateCart($storeId: Int!) {
    getOrCreateCart(storeId: $storeId) {
      id
    }
  }
`;

const CartArea = (props) => {
  const { storeId } = props;
  const [getOrCreateCart, { loading, error, data }] = useMutation(GET_OR_CREATE_CART, {
    variables: { storeId: parseInt(storeId) },
  });


  useEffect(() => {
    getOrCreateCart({ variables: { storeId: parseInt(storeId) }});
  }, [getOrCreateCart, storeId]);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const cartId = data?.getOrCreateCart?.id;

  return (
    <>
      <Grid item xs={12}>
        <Typography id="heading">Cart</Typography>
        <Grid item xs={12}>
          <CartHeader />
        </Grid>
        <Grid item xs={12}>
          {cartId && <CartItem
            cartId={cartId}
          />}
        </Grid>
        <Grid item xs={12}>
        {cartId && <CartFooter cartId={cartId} storeId={storeId} />}
        </Grid>
      </Grid>
    </>
  );
}

export default CartArea;
