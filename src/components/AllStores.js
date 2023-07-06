import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";


const GET_DATA_QUERY = gql`
query GetStores{
  myStores{
    id
    name
  }
}
`;



function Store() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_DATA_QUERY, {});

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const stores = data.myStores
  console.log(stores);

  function go_to_store(id){
    navigate(`/stores/${id}`);
  }
  return (
    <>
    <Typography variant="h5" style={{ padding: '30px 60px', fontWeight: 600 }}>My Stores</Typography>
    <Grid container item xs wrap="nowrap" style={{ padding: '0px 50px' }}>
      {stores?.map((store) => (
        <Grid item xs={12} sm={12} md={4} lg={3} key={store.id} style={{ padding: 10 }}>
          <Card raised onClick={() => go_to_store(store.id)}>
            <CardContent  style={{ padding: 10, textAlign: 'center' }}>
              <Typography variant="h6">{store.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
    
  );
}

export default Store;
