import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

function CreateItem(props) {
  const { items, setItems } = props;
  const [itemTitle, setItemTitle] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const handleSubmit = (event) => {
    let itemsArray = [...items];
    const newItem = {
      id: items.length,
      title: itemTitle,
      img_src: itemImage,
      price: itemPrice,
    };
    itemsArray.push(newItem);
    setItems([...itemsArray]);
    setItemTitle("");
    setItemImage("");
    setItemPrice(0);
  };

  return (
    <Grid container item xs alignItems="center" justifyContent="center">
      <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Typography
          variant="h4"
          style={{ padding: "40px ", fontWeight: "bold" }}
        >
          Add new item
        </Typography>
      </Grid>
      <Grid container item xs={4} justifyContent="center" alignItems="center">
        {/* <Paper style={{ padding: "1px 10px",  }}> */}
        <Grid item xs={12} style={{ padding: 20, backgroundColor: "#f0f1e4" }}>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
              label="Title"
              onChange={(e) => setItemTitle(e.target.value)}
              // required
              value={itemTitle}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
              label="Image Source"
              onChange={(e) => setItemImage(e.target.value)}
              // required
              value={itemImage}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
              label="Price"
              onChange={(e) => setItemPrice(parseInt(e.target.value))}
              // required
              type="number"
              value={itemPrice}
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button id="submit-btn" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
}

export default CreateItem;
