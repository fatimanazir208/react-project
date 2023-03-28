import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();

  function handleClick(path) {
    console.log("handle click");
    navigate(path);
  }
  
  

  return (
    <div className="app-bar-container">
    <AppBar position="static" id="app-bar" >
      <Toolbar style={{margin:'0px 20px'}}>
        <Typography variant="h6" onClick={() => handleClick("/")} className="app-bar-title">
          E-mart
        </Typography>
        <Button className="button-capitalize" color="inherit" onClick={() => handleClick("/new/item")}>Create Item</Button>
        <Button className="button-capitalize" color="inherit" onClick={() => handleClick("/")}>Cart</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
};

export default Navbar;
