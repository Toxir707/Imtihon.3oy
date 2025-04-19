import contactGroupService from "./contact_groups.service.js";

export const getAllContactGroups = async (req, res) => {
    const data = await contactGroupService.getAll();
    res.send({
        message: "success",
        data
    });
};

export const getContactGroupById = async (req, res) => {
    const id = req.params.id;
    const data = await contactGroupService.getById(id);
    res.send({
        message: "success",
        data
    });
};

export const createContactGroup = async (req, res) => {
    const { contactId, groupId } = req.body;
    const data = await contactGroupService.create(contactId, groupId);
    res.send({
        message: "success",
        data
    });
};

export const updateContactGroup = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    const data = await contactGroupService.updateById(id, updateData);
    res.send({
        message: "success",
        data
    });
};

export const deleteContactGroup = async (req, res) => {
    const id = req.params.id;
    const data = await contactGroupService.deleteById(id);
    res.send({
        message: "success",
        data
    });
};
