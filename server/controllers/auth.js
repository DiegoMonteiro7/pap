import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //Verificar se existe usuario

  const q = "SELECT * FROM users WHERE email = ? OR nickname = ?";

  db.query(q, [req.body.email, req.body.nickname], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Usuario já existe.");

    //Hash do password e criar um usuario
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`nickname`, `email`, `password`) VALUES (?)";
    const values = [req.body.nickname, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Usuario criado com sucesso.");
    });
  });
};

export const login = (req, res) => {
  //Verificar se o usuario existe

  const q = "SELECT * FROM users WHERE nickname = ?";

  db.query(q, [req.body.nickname], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0)
      return res.status(404).json("Usuario não encontraddo!");

    //Verificar senha
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Nome ou senha invalidos!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {};
