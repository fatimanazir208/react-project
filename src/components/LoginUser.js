import { gql, useMutation } from '@apollo/client';
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";


const LOGIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
        user {
          id
        }
        token
        error
      
    }
  }
`;

function LoginUser(props) {
  const {isLoggedIn, setIsLoggedIn} = props;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  
  
  useEffect(() => {
    if (data) {
      console.log(data.signIn.token);
      setIsLoggedIn(true);
      localStorage.setItem('authenticityToken', data.signIn.token);
    }
  }, [data]);


  const handleSubmit = () => {
    console.log(userEmail, userPassword);
    loginUser({ variables: { email: userEmail, password: userPassword } })
    setUserEmail("");
    setUserPassword("");
  };

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  

  return (
    <Grid container item xs alignItems="center" justifyContent="center">
    {isLoggedIn ? (
      <p>you are already signed in</p>
      ) : 
      ( <>
        <Grid container item xs={12} justifyContent="center" alignItems="center">
        <Typography
          variant="h4"
          style={{ padding: "40px ", fontWeight: "bold" }}
        >
          Login
        </Typography>
      </Grid>
      <Grid container item xs={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} style={{ padding: 20, backgroundColor: "#f0f1e4" }}>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
              label="Email"
              onChange={(e) => setUserEmail(e.target.value)}
              // required
              value={userEmail}
              variant="outlined"
              fullWidth
              type="email"
            />
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <TextField
              label="Password"
              onChange={(e) => setUserPassword(e.target.value)}
              // required
              value={userPassword}
              variant="outlined"
              fullWidth
              type="password"
            />
          </Grid>

          <Grid item xs={12} style={{ paddingTop: 20 }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button id="submit-btn" type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      </>)
    }
    </Grid>
  );
}

export default LoginUser;
