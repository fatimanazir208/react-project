import { Grid, Paper } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import CartArea from "./CartArea";
import ItemsArea from "./ItemsArea";
import { styles } from "./styles";
import _ from "lodash";



const GET_ITEMS_QUERY = gql`
query getItems($storeId: ID!){
  items(storeId: $storeId){
    id
    name
    price
    category{
      id
      name
    }
  }
  }
`;


function Store() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ITEMS_QUERY, {
    variables: { storeId: parseInt(id) },
  });
  const classes = styles();

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const items = data.items
  const groupedCategories = _.groupBy(items, (item) => item.category.id);
  const categories = Object.values(groupedCategories);



  return (
    <Grid container item xs wrap="nowrap">
      <Grid item xs={4} sm={4} md={7} lg={8} style={{ padding: 10 }}>
        <Paper className={classes.paper}>
          <ItemsArea categories={categories} storeId={id}/>
        </Paper>
      </Grid>
      <Grid item xs={8} sm={8} md={5} lg={4} style={{ padding: 10 }}>
        <Paper className={classes.paper}>
          <CartArea storeId={id}/>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Store;
