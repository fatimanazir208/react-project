import { Grid, Typography } from "@material-ui/core";
import Item from "./Item";

function ItemsArea(props) {
  const { items, addItem } = props;

  return (
    <Grid item xs>
      <Typography id="heading">Items</Typography>
      <Item addToCart={addItem} items={items} />
    </Grid>
  );
}

export default ItemsArea;
