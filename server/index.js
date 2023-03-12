import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";

import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/posts.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use("/server/posts", postRoutes)
app.use("/server/auth", authRoutes)
app.use("/server/users", userRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

