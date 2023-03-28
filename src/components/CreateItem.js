import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";


function CreateItem(props) {
  const {items, setItems} = props
  const [itemTitle, setItemTitle] = useState('')
  const [itemImage, setItemImage] = useState('')
  const [itemPrice, setItemPrice] = useState(0)

  const handleSubmit = (event) => {
    console.log("entered form submitted");
    event.preventDefault();
    let itemsArray = [...items];
    const newItem = {
      id: items.length,
      title: itemTitle,
      img_src: itemImage,
      price: itemPrice
    };
    itemsArray.push(newItem);
    setItems([...itemsArray]);
    console.log(items);
    setItemTitle("");
    setItemImage("");
    setItemPrice(0);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{height:'100vh'}}
      >
        <Grid item >
          <Typography variant="h4" style={{padding: '40px ', fontWeight:'bold'}}>
            Add new item
          </Typography>
        </Grid>
        <Grid item >
          <Paper style={{padding: '1px 10px', backgroundColor: "#f0f1e4"}}>
            <form onSubmit={handleSubmit} className="form"  alignContent="center" >
              <div>
              <Typography id="form-label" >Title</Typography>
                <TextField className="form-field" onChange={e => setItemTitle(e.target.value)}
                  required
                  defaultValue={itemTitle}
                  variant="outlined"
                />
              </div>
              <div>
              <Typography id="form-label">Image Source</Typography>
                <TextField className="form-field" onChange={e => setItemImage(e.target.value)} 
                  required
                  defaultValue={itemImage}
                  variant="outlined"
                />
              </div>
              <div>
              <Typography id="form-label">Price</Typography>
                <TextField  className="form-field"  onChange={e => setItemPrice(parseInt(e.target.value))}
                  required
                  type="number"
                  defaultValue={itemPrice}
                  variant="outlined"
                />
              </div>
              <Box display="flex" justifyContent="center" alignItems="center"><Button id="submit-btn" type="submit">Submit</Button></Box>
            </form>
    
          </Paper>
        </Grid>
      </Grid>
     
        
        

    </>
  );
}

export default CreateItem;
