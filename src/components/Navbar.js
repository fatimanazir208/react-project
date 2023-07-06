import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';

const LOGOUT_USER = gql`
  mutation {
    signOut 
  }
`;


function Navbar(props) {
  const {isLoggedIn, setIsLoggedIn} = props;
  const navigate = useNavigate();
  const [logoutUser] = useMutation(LOGOUT_USER);

  function handleClick(path) {
    console.log("handle click");
    navigate(path);
  }

  async function handleLogout() {
    await logoutUser();
    setIsLoggedIn(false);
    localStorage.removeItem('authenticityToken');
    navigate('/');
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
        {isLoggedIn && 
        <>
          <Button
            className="button-capitalize"
            color="inherit"
            onClick={() => handleClick("/")}
          >
            Stores
          </Button>
          <Button
              className="button-capitalize"
              color="inherit"
              onClick={() => handleLogout()}
            >
            Logout
          </Button>
        </>
        }
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
