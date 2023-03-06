import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./css/footer.css"

import { Link } from "react-router-dom";

// import { Container } from './styles';

function footer() {
  return (
    <Box
      maxWidht="lg"
      sx={{
        background: "black",
        padding: "1rem",
        width: "100%",
        color: "#fff",
        padding: "0 2%",
        textAlign: "center",
        marginTop:"0.6%"
      }}
    >
      <Grid container spacing={2} maxWidth="sl">
        <Grid xs={12} md={3} sm={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            fontSize="50px"
            noWrap
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Genz
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "0 35%",
              }}
            >
              <LinkedInIcon />
              <FacebookIcon />
              <InstagramIcon />
            </Box>
          </Typography>
        </Grid>
        <Grid xs={12} md={3} sm={6}>
          <Typography
            variant="h6"
            fontSize="40px"
            noWrap
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Produtos
            <Box sx={{fontSize: "25px", margin:"1% 0"}}>
              <div className="link">
                <Link to="">Website</Link>
              </div>
              <div className="link">
                <Link to="">Mobile</Link>
              </div>
            </Box>
          </Typography>
        </Grid>
        <Grid xs={12} md={3} sm={6}>
          <Typography
            variant="h6"
            fontSize="40px"
            noWrap
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Recursos
            <Box sx={{fontSize: "25px", margin:"1% 0"}}>
              <div className="link">
                <Link to="">Sobre</Link>
              </div>
              <div className="link">
                <Link to="">Avaliação</Link>
              </div>
              <div className="link">
                <Link to="">Suporte</Link>
             </div>
            </Box>
          </Typography>
        </Grid>
        <Grid xs={12} md={3} sm={6}>
          <Typography
            variant="h6"
            fontSize="40px"
            noWrap
            component="a"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Politicas
            <Box sx={{fontSize: "25px", margin:"1% 0", color:"white"}}>
              <div className="link">
                <Link to="">Termos</Link>
              </div>
              <div className="link">
                <Link to="">Privacidade</Link>
              </div>
              <div className="link">
                <Link to="">Diretrizes</Link>
              </div>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default footer;
