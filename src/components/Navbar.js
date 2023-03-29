import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleClick(path) {
    console.log("handle click");
    navigate(path);
  }

  return (
    <AppBar position="static" id="app-bar">
      <Toolbar style={{ padding: "0px 55px", minHeight: 60, maxHeight: 60 }}>
        <Typography
          variant="h6"
          onClick={() => handleClick("/")}
          className="app-bar-title"
        >
          E-mart
        </Typography>
        <Button
          className="button-capitalize"
          color="inherit"
          onClick={() => handleClick("/new/item")}
        >
          Create Item
        </Button>
        <Button
          className="button-capitalize"
          color="inherit"
          onClick={() => handleClick("/")}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
