import { BaseException } from "../../exception/base.exception.js"
import Contact from "./contact.model.js"

class ContactService{
    constructor() {
        this.contactModel = Contact;
    }

    async getContactById(id) {
        const findContact = await this.contactModel.findbyId(id)
        if (!findContact) {
            throw new BaseException('Category not found', 409);
        }
        return findContact;
    }

    async getAllContact() {
        const findContact = await this.contactModel.find().populate("user")
        return findContact
    }

    async createContact(userId,first_name, phone) {
        const findContact = await this.contactModel.findOne({ phone });
    
        if (findContact) {
            throw new BaseException('Contact with this phone already exists', 409);
        }
    
        const newContact = await this.contactModel.create({
            userId,
            first_name,
            phone,
        });
    
        return newContact;
    }

    async updateContactById(contactId, updateData) {
        const findContact = await this.contactModel.findById(contactId);
    
        if (!findContact) {
            throw new BaseException('Contact not found', 409);
        }
    
        const updatedContact = await this.contactModel.findByIdAndUpdate(
            contactId,
            updateData,
            { new: true } 
        );
    
        return updatedContact;
    }

    async deleteContactById(id) {
        const findContact = await this.contactModel.findById(id)
        if(!findContact){
            throw new BaseException("Contact not found", 409)
        }
        const deleteContact = await this.contactModel.findOneAndDelete(id)
        return deleteContact
    }    
}

export default new ContactService()