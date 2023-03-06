import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./css/style.css"

import Axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export function Register() {
  
  const initState = {
    nickname: "",
    email: "",
    password: "",
    confPassword: "",
  };

  const [initalValues, setInitialValues] = useState(initState);

  const validationShema = yup
    .object({
      nickname: yup.string().required("O nome é obrigatório").min(4, "O nome tem que ter no minimo 4 caracteres"),
      email: yup.string().email("O email é invalido").required("O email é obrigatório"),
      password: yup.string().required("A senha é obrigatória").min(4, "A senha tem que ter no minimo 4 caracteres").max(50),
      confPassword: yup
        .string()
        .when("password", (password, field) =>
          password ? field.required("Confirma a senha").oneOf([yup.ref("password")], "A senha está diferente   ") : field
        ),
    })
    .required();

  const onSubmit = (values) => {
    console.log("Values::::", values);
  };

  const onError = (error) => {
    console.log("ERROR::::", values)
  };

  const {
    register,
    handleSubmit,
    watch,  
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: initalValues,
    resolver: yupResolver(validationShema),
  });

  const [values, setValues] = useState();

  const handleChangeValues = (values) => {
    setValues((prevValue) => ({
      ...prevValue,
      [values.target.name]: values.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/registerUser", {
      nickname: values.nickname,
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
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
            width: { xl: "50%", md: "60%", xs: "100%" },
            height: "auto",
          }}
        >
          <Paper
            elevation={20}
            component="form"
            sx={{
              "& > :not(style)": {
                m: 2,
                width: { xl: "70%", md: "80%", xs: "100%" },
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
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="filled-basic"
                  label="Usuário*:"
                  variant="filled"
                  type="text"
                  {...register("nickname")}
                  placeholder="Genz123..."
                  onChange={handleChangeValues}
                />
                {errors.nickname && <p>{errors.nickname.message}</p>}
                <br />
                <TextField
                  id="filled-basic"
                  label="Email*:"
                  variant="filled"
                  type="Email"
                  {...register("email")}
                  placeholder="email@email.com"
                  onChange={handleChangeValues}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <br />
                <TextField
                  id="filled-basic"
                  label="Senha*:"
                  variant="filled"
                  type="password"
                  {...register("password")}
                  placeholder="senha123"
                  onChange={handleChangeValues}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <br />
                <TextField
                  id="filled-basic"
                  label="Confirmar senha*:"
                  variant="filled"
                  type="password"
                  {...register("confPassword")}
                  placeholder="senha123"
                />
                {errors.confPassword && <p>{errors.confPassword.message}</p>}
                <br />
                <Button variant="contained" type="submit" onClick={handleClickButton}>
                  Enviar
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Register;
