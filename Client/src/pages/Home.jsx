import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import metaverso from "../img/metaverso.webp";

// import { Container } from './styles';

function Home() {
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
                Já pensou...
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
                ...em fazer parte de uma sociedade virtual com diversas pessoas
                diferentes em um só aplicativo?
              </Typography>
              <Stack spacing={2} direction="row" marginTop="8%">
                <Button variant="contained" sx={{ fontSize: "20px" }}>
                  Baixar Genz
                </Button>
                <Button variant="text" sx={{ fontSize: "20px" }}>
                  Abrir Genz
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

      <Container
        maxWidth="sl"
        sx={{
          height: "10%",
          padding: "3%",
          paddingTop: "5%",
          backgroundColor: "#99999947",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid
              lg={6}
              sx={{
                display: { lg: "block", md: "none", sm: "none", xs: "none" },
              }}
            >
              <img src={metaverso} width="100%" />
            </Grid>
            <Grid
              lg={6}
              sx={{
                textAlign: {
                  lg: "end",
                  md: "center",
                  sm: "center",
                  sx: "center",
                },

                display: "flex",

                flexDirection: {
                  xs: "column",
                },

                alignItems: {
                  lg: "end",
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
                  width: "60%",
                  float: "right",
                  fontSize: {
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                    xs: "1.5rem",
                  },
                }}
              >
                Crie um ambiente divertido com seus amigos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  color: "inherit",
                  textDecoration: "none",
                  width: "60%",
                  float: "right",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.1rem",
                  },
                }}
              >
                Com o nosso sistema de busca de amigos com os mesmos interesses,
                podemos cria um ambiente segura e divertido.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Container
        maxWidth="sl"
        sx={{
          height: "10%",
          padding: "3%",
          paddingTop: "5%",
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
                  sx: "center",
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
                  width: "60%",
                  fontSize: {
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                    xs: "1.5rem",
                  },
                }}
              >
                Crie um ambiente divertido com seus amigos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  color: "inherit",
                  textDecoration: "none",
                  width: "60%",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.1rem",
                  },
                }}
              >
                Com o nosso sistema de busca de amigos com os mesmos interesses,
                podemos cria um ambiente segura e divertido.
              </Typography>
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

      <Container
        maxWidth="sl"
        sx={{
          height: "10%",
          padding: "3%",
          paddingTop: "5%",
          backgroundColor: "#99999947",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid
              lg={6}
              sx={{
                display: { lg: "block", md: "none", sm: "none", xs: "none" },
              }}
            >
              <img src={metaverso} width="100%" />
            </Grid>
            <Grid
              lg={6}
              sx={{
                textAlign: {
                  lg: "end",
                  md: "center",
                  sm: "center",
                  sx: "center",
                },

                display: "flex",

                flexDirection: {
                  xs: "column",
                },

                alignItems: {
                  lg: "end",
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
                  width: "60%",
                  float: "right",
                  fontSize: {
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                    xs: "1.5rem",
                  },
                }}
              >
                Crie um ambiente divertido com seus amigos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  color: "inherit",
                  textDecoration: "none",
                  width: "60%",
                  float: "right",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.1rem",
                  },
                }}
              >
                Com o nosso sistema de busca de amigos com os mesmos interesses,
                podemos cria um ambiente segura e divertido.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Home;