import { Grid, Typography } from "@material-ui/core";
import Item from "./Item";

function ItemsArea(props) {
  const { items, addItem } = props;

  return (
    <>
      <Grid container spacing={3} >
        <Grid xs={12} >
          <Typography id="heading">
            Items
          </Typography>
        </Grid>
        <Grid container spacing={3} style={{padding: '0px 30px', margin:'auto', justifyContent: 'center'}}>
          <Item addToCart={addItem} items={items}/>
        </Grid>
      </Grid>
    </>
  );
}

export default ItemsArea;
