import React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import metaverso from "../img/metaverso.webp";

function Sobre() {
  return (
    <>
      <Container
        maxWidth="sl"
        sx={{
          backgroundColor: "#000000",
          height: "10%",
          color: "white",
          padding: "3%",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid
              lg={12}
              sx={{
                width: "100vw",
                textAlign: {
                  lg: "center",
                  md: "center",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "white",
                  textDecoration: "none",
                  marginBottom: "2%",
                  borderBottom: "3px solid white",
                  fontSize: {
                    lg: "4rem",
                    md: "3rem",
                    sm: "3rem",
                    xs: "3rem",
                  },
                }}
              >
                Sobre nós
              </Typography>
            </Grid>
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
                  color: "white",
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
                GenZ...
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "white",
                  textDecoration: "none",
                  fontSize: {
                    lg: "2rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                }}
              >
                Divirta-se criando um espaço social digital que te ajude a fazer
                amigos e a interagir com outras pessoas simultaneamente.
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
          backgroundColor: "#99999947",
          height: "10%",
          color: "white",
          padding: "3%",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid
              lg={12}
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
                  fontFamily: "roboto",
                  fontWeight: 900,
                  color: "black",
                  textDecoration: "none",
                  fontSize: {
                    lg: "4rem",
                    md: "3rem",
                    sm: "2rem",
                    xs: "3rem",
                  },
                }}
              >
                Projeto
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                }}
              >
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container
        maxWidth="sl"
        sx={{
          backgroundColor: "#ffffff",
          height: "10%",
          color: "white",
          padding: "3%",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid
              lg={12}
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
                  fontFamily: "roboto",
                  fontWeight: 900,
                  color: "black",
                  textDecoration: "none",
                  fontSize: {
                    lg: "4rem",
                    md: "3rem",
                    sm: "2rem",
                    xs: "3rem",
                  },
                }}
              >
                Objetivos
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: {
                    lg: "1.5rem",
                    md: "1.5rem",
                    sm: "1.5rem",
                    xs: "1.5rem",
                  },
                }}
              >
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Sobre;
