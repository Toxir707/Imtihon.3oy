import { Router } from 'express';
import { AllGroups, GroupById, createGroup, deleteGroups, updateGroups } from "./group.controller.js"

const groupRouter = Router()

groupRouter 
    .get("/:id", GroupById)
    .get("/", AllGroups)
    .post("/create", createGroup)
    .put("/update/:id", updateGroups)
    .delete("/delete", deleteGroups)


export default groupRouter;
