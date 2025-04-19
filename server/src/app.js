import { config } from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import morgan from "morgan"
import userRouter  from "./modules/users/user.route.js"
import contactRouter from "./modules/contacts/contact.route.js";
import groupRouter from "./modules/groups/group.route.js";
import contactGroupRouter from "./modules/contact_groups/contact_groups.route.js";

config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use(cors({
    origin: "*"
}))

if(process.env.NODE_ENV == "develop"){
    app.use(morgan("tiny"))
}

app.use("/user", userRouter);
app.use("/contact", contactRouter)
app.use("/group", groupRouter)
app.use("/cgroup", contactGroupRouter)


export default app; 