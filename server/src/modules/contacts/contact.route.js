import { Router } from "express"
import { AllContacts, ContactById, createContact, updateContact, deletedContact } from "./contact.contrller.js";


const contactRouter = Router();

contactRouter
    .get("/:id", ContactById)
    .get("/", AllContacts)
    .post("/create", createContact)
    .put("/update", updateContact)
    .delete("/delete", deletedContact)

export default contactRouter;