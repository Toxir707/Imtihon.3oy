import { BaseException } from "../../exception/base.exception.js";
import Group from "./group.model.js";

class GroupService {
    constructor() {
        this.groupModel = Group;
    }

    async getGroupById(id) {
        const findGroup = await this.groupModel.findById(id);
        if (!findGroup) {
            throw new BaseException("Group not found", 409);
        }
        return findGroup;
    }

    async getAllGroup() {
        const findGroup = await this.groupModel.find();
        return findGroup;
    }

    async createGroup(userId, grname) {
        const findGroup = await this.groupModel.findOne({ grname });

        if (findGroup) {
            throw new BaseException('Group with this name already exists', 409);
        }

        const newGroup = await this.groupModel.create({
            grname,
            userId, 
        });

        return newGroup;
    }

    async updateGroupById(groupId, updateData) {
        const findGroup = await this.groupModel.findById(groupId)
        console.log("bu updatedata",updateData);
        
        if (!findGroup) {
            throw new BaseException("Group not found", 409);
        }

        const updatedGroup = await this.groupModel.findByIdAndUpdate(groupId, updateData, {
            new: true,
        });

        return updatedGroup;
    }

    async deleteGroupById(id) {
        const findGroup = await this.groupModel.findById(id);

        if (!findGroup) {
            throw new BaseException("Group not found", 409);
        }

        const deletedGroup = await this.groupModel.findByIdAndDelete(id);
        return deletedGroup;
    }
}

export default new GroupService();