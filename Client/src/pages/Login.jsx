import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap",
        "& > :not(style)": {
          lg: {
            width: "40%",
            height: "50%",
          },
          md: {
            width: "60%",
            height: "50%",
          },
          xs: {
            width: "80%",
            height: "50%",
          },
        },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Grid
          sx={12}
          textAlign="center"
          margin="2%"
          borderBottom="1px solid white"
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: {
                lg: "3rem",
                md: "2.5rem",
                sm: "2.5rem",
                xs: "2.5rem",
              },
            }}
          >
            Login
          </Typography>
        </Grid>
        <Grid sx={12} textAlign="center" margin="2%">
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: {
                lg: "2rem",
                md: "2rem",
                sm: "2rem",
                xs: "2rem",
              },
            }}
          >
            Entrar com
            <Box
              sx={{
                marginTop: "2%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <GoogleIcon fontSize="50px" />
              &nbsp; &nbsp;
              <FacebookIcon fontSize="50px" />
            </Box>
          </Typography>
        </Grid>
        <Grid sx={12} textAlign="center" margin="2%">
          <form>
            <input type="text" placeholder="nome"/>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="senha"/>
            <input type="submit" value="enviar" />
          </form>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Login;