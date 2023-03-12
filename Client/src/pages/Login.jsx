import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import axios from "axios";

function Login() {
  const [inputs, setInputs] = useState({
    nickname: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            width: { xl: "30%", md: "60%", xs: "100%" },
            height: "auto",
          }}
        >
          <Paper
            elevation={20}
            component="form"
            sx={{
              "& > :not(style)": {
                m: 2,
                width: { xl: "80%", md: "80%", xs: "100%" },
              },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "5%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textAlign: "center",
                fontSize: {
                  lg: "4rem",
                  md: "3rem",
                  sm: "2rem",
                  xs: "3rem",
                },
              }}
            >
              Entrar
            </Typography>
            <form>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="filled-basic"
                  label="Nome da conta*:"
                  variant="filled"
                  type="text"
                  name="nickname"
                  placeholder="Genz1231..."
                  onChange={handleChange}
                />
                <br />
                <TextField
                  id="filled-basic"
                  label="Senha*:"
                  variant="filled"
                  type="password"
                  name="password"
                  placeholder="senha123"
                  onChange={handleChange}
                />
                <br />
                <Button variant="contained" onClick={handleSubmit}>
                  Logar
                </Button>
                <br />
                {err && <p>{err}</p>}
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Login;
