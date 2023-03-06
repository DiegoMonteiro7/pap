import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import metaverso from "../img/metaverso.webp";
// import { Container } from './styles';

function Baixar() {
  return (
    <>
      <Container
        maxWidth="sl"
        sx={{
          backgroundColor: "black",
          height: "10%",
          color: "white",
          padding: "3%",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid
              lg={6}
              sx={{
                textAlign: {
                  lg: "start",
                  md: "center",
                  sm: "center",
                  xs: "center",
                },

                display: "flex",

                flexDirection: {
                  xs: "column",
                },

                alignItems: {
                  lg: "start",
                  md: "center",
                  sm: "center",
                  xs: "center",
                },

                justifyContent: {
                  xs: "center",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  marginBottom: "5%",
                  fontSize: {
                    lg: "4rem",
                    md: "3rem",
                    sm: "2rem",
                    xs: "3rem",
                  },
                }}
              >
                Proximo passo...
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: {
                    lg: "2rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                }}
              >
                Leve o GenZ para onde voçe quiser dentro do seu smartphone,
                tendo otimas experiencias em diversos lugares do mundo.
              </Typography>
              <Stack spacing={2} direction="row" marginTop="8%">
                <Button variant="contained" sx={{ fontSize: "20px" }}>
                  Baixar Genz
                </Button>
              </Stack>
            </Grid>
            <Grid
              lg={6}
              sx={{
                display: { lg: "block", md: "none", sm: "none", xs: "none" },
              }}
            >
              <img src={metaverso} width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Baixar;
