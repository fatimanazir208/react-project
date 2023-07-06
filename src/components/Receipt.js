import { Grid, Typography } from "@material-ui/core";
import { gql, useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";


const GET_DATA_QUERY = gql`
query GetReceipt($id: ID!){
  receipt(id: $id){
    id
    orderSummary
  }
  }
`;

function CreateItem() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DATA_QUERY, {
    variables: { id: parseInt(id) },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const receipt = data.receipt;
  console.log(receipt);

  return (
    <Grid container item xs alignItems="center" justifyContent="center">
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Typography
          variant="h4"
          style={{ padding: "40px ", fontWeight: "bold" }}
        >
          Receipt
        </Typography>
      </Grid>
      <Grid container item xs={4} justifyContent="center" alignItems="center">
        <Typography>
          id: {receipt.id}, order summary: {receipt.orderSummary}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CreateItem;
