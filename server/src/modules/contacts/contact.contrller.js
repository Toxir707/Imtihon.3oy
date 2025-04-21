import Group from "../groups/group.model.js";
import contactService from "./contact.service.js";

export const AllContacts = async(req, res) => {
    const contacts = await contactService.getAllContact();
    res.send({
        message: "succes",
        data: contacts
    });
};

export const ContactById = async (req, res) => {
    const id = req.params.id;
    const contact = await contactService.getContactById(id);
    res.send({
        message: "succes",
        data: contact
    });
};

export const createContact = async (req, res) => {
    const {userId, first_name, phone} = req.body;
    const contact = await contactService.createContact(userId, first_name, phone)
    await Group.findByIdAndUpdate(userId, {
        $push: { contacts: contact._id }
    });
    res.send({
        message: "succes",
        data: contact
    });
};

export const updateContact = async (req, res) => {
    const id = req.params.id;
    const {first_name, phone} = req.body;
    
    const contact = await contactService.updateContactById(id, first_name, phone);
    res.send({
      message: "success",
      data: contact,
    });
};

export const deletedContact = async (req, res) => {
    const id = req.params.id;
    const contact = await contactService.deleteContactById(id);
    res.send({
      message: "success",
      data: contact,
    });
};