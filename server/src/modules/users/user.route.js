import { Router } from "express"
import { getUserById, register, login, updateUser, deleteUser } from "./user.controller.js"

const userRouter = Router()

userRouter
    .post("/register", register)
    .get("/:id", getUserById)
    .post("/login", login)
    .delete("/delete/:id", deleteUser)
    .put("/update/:id", updateUser)

export default userRouter;
