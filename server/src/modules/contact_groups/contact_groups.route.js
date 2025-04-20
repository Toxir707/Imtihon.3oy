import { Router } from "express";
import {
    getAllContactGroups,
    getContactGroupById,
    createContactGroup,
    updateContactGroup,
    deleteContactGroup
} from "./contact_groups.controller.js";
import { ValidationMiddleware } from "../../middleware/validation.middlware.js"
import { createContactGroups, updateContactGroups } from "../dtos/contact_group/contact_group.schema.js"
import { Protected } from "../../middleware/protected.middleware.js"
import { ROLES } from "../../constans/role.js"
import { Roles } from "../../middleware/roles.middleware.js"

const contactGroupRouter = Router();

contactGroupRouter
    .get("/", Protected(true), Roles(ROLES.OWNER,ROLES.SUPER_ADMIN), getAllContactGroups)
    .get("/:id", Protected(true), Roles(ROLES.ALL), getContactGroupById)
    .post("create/", Protected(false), Roles(ROLES.ALL), ValidationMiddleware(createContactGroups), createContactGroup)
    .put("/:id", Protected(false), Roles(ROLES.ALL), ValidationMiddleware(updateContactGroups), updateContactGroup)
    .delete("/:id", Protected(true), Roles(ROLES.ALL), deleteContactGroup)

export default contactGroupRouter;
