import User from "../users/user.model.js";
import groupService from "./group.service.js";

export const AllGroups = async(req, res) => {
    const groups = await groupService.getAllGroup()
    res.send({
        message: "succes",
        data: groups
    });
};

export const GroupById = async(req, res) => {
    const id = req.params.id;
    const groups = await groupService.getGroupById(id)
    res.send({
        message: "succes",
        data: groups
    });
};

export const createGroup = async(req, res) => {
    const { userId, grname } = req.body;
    const groups = await groupService.createGroup(userId, grname);
    await User.findByIdAndUpdate(userId, {
        $set: { group: groups._id },
    });
    res.send({
        message: "succes",
        data: groups
    });
};

export const updateGroups = async (req, res) => {
    const id = req.params.id;
    const { grname } = req.body;

    const groups = await groupService.updateGroupById(id, { grname })
    res.send({
        message: "succes",
        data: groups
    });
};

export const deleteGroups = async(req, res) => {
    const id = req.params.id;
    const groups = await groupService.deleteGroupById(id);
    res.send({
        message: "succes",
        data: groups
    });
};