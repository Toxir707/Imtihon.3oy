import { Router } from "express"
import { getUserById, register, login, updateUser, deleteUser, getAllUser } from "./user.controller.js"
import { ValidationMiddleware } from "../../middleware/validation.middlware.js"
import { registerUser, loginUser } from "../dtos/user/user.schema.js"
import { Protected } from "../../middleware/protected.middleware.js"
import { ROLES } from "../../constans/role.js"
import { Roles } from "../../middleware/roles.middleware.js"
import { upload } from "../../config/multer.config.js"


const userRouter = Router()

userRouter
    .post("/register", upload.single("image"), Protected(false), Roles(ROLES.ALL),ValidationMiddleware(registerUser), register)
    .get("/:id", Protected(true), Roles(ROLES.ALL), getUserById)
    .get("/", Protected(true), Roles(ROLES.ALL), getAllUser)
    .post("/login", Protected(false), Roles(ROLES.ALL), ValidationMiddleware(loginUser), login)
    .delete("/delete/:id", Protected(true), Roles(ROLES.ALL), deleteUser)
    .put("/update/:id", Protected(true), Roles(ROLES.ALL), updateUser)
export default userRouter;
