import { Router } from "express"
import { AllContacts, ContactById, createContact, updateContact, deletedContact } from "./contact.contrller.js";
import { ValidationMiddleware } from "../../middleware/validation.middlware.js"
import { createContacts, updateContacts } from "../dtos/contact/contact.schema.js"
import { Protected } from "../../middleware/protected.middleware.js"
import { ROLES } from "../../constans/role.js"
import { Roles } from "../../middleware/roles.middleware.js"


const contactRouter = Router();

contactRouter
    .get("/:id", Protected(true), Roles(ROLES.ALL), ContactById)
    .get("/", Protected(true), Roles(ROLES.ALL), AllContacts)
    .post("/create",  Protected(false), Roles(ROLES.ALL), ValidationMiddleware(createContacts), createContact)
    .put("/update", Protected(false), Roles(ROLES.ALL), ValidationMiddleware(updateContacts), updateContact)
    .delete("/delete", Protected(true), Roles(ROLES.ALL), deletedContact)
export default contactRouter;