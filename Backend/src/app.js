import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Limit } from "./constants.js";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        optionsSuccessStatus: 200,
    })
);

app.use(express.json({ limit: Limit }));
app.use(express.urlencoded({ extended: true, limit: Limit }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export { app };
