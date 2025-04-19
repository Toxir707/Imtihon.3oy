import { Router } from "express";
import {
    getAllContactGroups,
    getContactGroupById,
    createContactGroup,
    updateContactGroup,
    deleteContactGroup
} from "./contact_groups.controller.js";

const contactGroupRouter = Router();

contactGroupRouter.get("/", getAllContactGroups)
    .get("/:id", getContactGroupById)
    .post("/", createContactGroup)
    .put("/:id", updateContactGroup)
    .delete("/:id", deleteContactGroup)

export default contactGroupRouter;
