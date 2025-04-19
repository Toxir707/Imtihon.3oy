import { BaseException } from "../../exception/base.exception.js";
import ContactGroup from "./contact_groups.model.js";

class ContactGroupService {
    constructor() {
        this.contactGroupModel = ContactGroup;
    }

    async getAll() {
        return await this.contactGroupModel
            .find()
            .populate("contactId")
            .populate("groupId");
    }

    async getById(id) {
        const found = await this.contactGroupModel
            .findById(id)
            .populate("contactId")
            .populate("groupId");

        if (!found) {
            throw new BaseException("Contact-Group not found", 404);
        }

        return found;
    }

    async create(contactId, groupId) {
        const exists = await this.contactGroupModel.findOne({ contactId, groupId });
        if (exists) {
            throw new BaseException("Bu kontakt allaqachon shu guruhda bor", 409);
        }

        const created = await this.contactGroupModel.create({
            contactId,
            groupId,
        });

        return created;
    }

    async updateById(id, updateData) {
        const found = await this.contactGroupModel.findById(id);
        if (!found) {
            throw new BaseException("Contact-Group not found", 404);
        }

        const updated = await this.contactGroupModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        return updated;
    }

    async deleteById(id) {
        const found = await this.contactGroupModel.findById(id);
        if (!found) {
            throw new BaseException("Contact-Group not found", 404);
        }

        return await this.contactGroupModel.findByIdAndDelete(id);
    }
}

export default new ContactGroupService();
