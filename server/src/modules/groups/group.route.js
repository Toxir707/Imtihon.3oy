import { Router } from 'express';
import { AllGroups, GroupById, createGroup, deleteGroups, updateGroups } from "./group.controller.js"
import { ValidationMiddleware } from "../../middleware/validation.middlware.js"
import { createGroups, updateGroup } from "../dtos/group/group.schema.js"
import { Protected } from "../../middleware/protected.middleware.js"
import { ROLES } from "../../constans/role.js"
import { Roles } from "../../middleware/roles.middleware.js"



const groupRouter = Router()

groupRouter 
    .get("/:id", Protected(true), Roles(ROLES.ALL), GroupById)
    .get("/", Protected(true), Roles(ROLES.OWNER,ROLES.SUPER_ADMIN), AllGroups)
    .post("/create", Protected(false), Roles(ROLES.ALL), ValidationMiddleware(createGroups), createGroup)
    .put("/update/:id", Protected(false), Roles(ROLES.ALL), ValidationMiddleware(updateGroup), updateGroups)
    .delete("/delete",  Protected(true), Roles(ROLES.ALL), deleteGroups)
export default groupRouter;
