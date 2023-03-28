import { Divider, Grid} from "@material-ui/core";

function CartHeader() {
return (
  <>
    <Grid container>
      <Grid item xs={1}>
        
      </Grid>
      <Grid item xs={4}>
        Item
      </Grid>
      <Grid item xs={4}>
        Qty
      </Grid>
      <Grid item xs={3}>
        Price
      </Grid>
    </Grid>
    <Divider style={{backgroundColor: "grey", margin: '10px 0px'}}/>
  </>
)
}
export default CartHeader;