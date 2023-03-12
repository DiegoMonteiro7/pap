import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link, useNavigate } from "react-router-dom"

import "./css/style.css";

import axios from "axios";

export function Register() {
  const [inputs, setInputs] = useState({
    nickname: "",
    email: "",
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
      await axios.post("/auth/register", inputs);
      navigate("/login")
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
                width: { xl: "90%", md: "80%", xs: "100%" },
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
              Conta
            </Typography>
            <form>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="filled-basic"
                  label="Usuário*:"
                  variant="filled"
                  type="text"
                  name="nickname"
                  placeholder="Genz123..."
                  onChange={handleChange}
                />
                <br />
                <TextField
                  id="filled-basic"
                  label="Email*:"
                  variant="filled"
                  type="Email"
                  name="email"
                  placeholder="email@email.com"
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
                <TextField
                  id="filled-basic"
                  label="Confirmar senha*:"
                  variant="filled"
                  type="password"
                  placeholder="senha123"
                />
                <br />
                <Button variant="contained" onClick={handleSubmit}>
                  Enviar
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

export default Register;
