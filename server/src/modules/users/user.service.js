import bcrypt from "bcrypt";
import { BaseException } from "../../exception/base.exception.js";
import User from "./user.model.js";

class UserService {
  constructor() {
    this.userModel = User;
  }

  async findUserById(id) {
    const findUser = await this.userModel.findById(id);
    if (!findUser) {
      throw new BaseException("User hali ro'yhatdan o'tmagan", 409);
    }
    return findUser;
  }

  async getAllUser(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      this.userModel
        .find()
        .populate({
          path: "group",
          populate: {
            path: "contacts", 
          },
        })
        .skip(skip)
        .limit(limit),
      this.userModel.countDocuments(),
    ]);

    return {
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalUsers: total,
      users,
    };
  }

  async registerUsers({ name, email, password, group }) {
    const findUser = await this.userModel.findOne({ email });
    if (findUser) {
      throw new BaseException("Siz ro'yhatdan o'tib bo'lgansiz", 409);
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await this.userModel.create({
      name,
      email,
      password: passwordHash,
      group,
    });
    return newUser;
  }

  async loginUsers({ email, password }) {
    const findUser = await this.userModel.findOne({ email });
    if (!findUser) {
      throw new BaseException("Siz hali ro'yhatdan o'tmagansiz", 409);
    }
    const isPasswordMatch = await bcrypt.compare(password, findUser.password);
    if (!isPasswordMatch) {
      throw new BaseException("Parol xato kiritilgan !", 409);
    }
    return findUser;
  }

  async deleteUserById(id) {
    const findUser = await this.userModel.findOneAndDelete(id);
    if (!findUser) {
      throw new BaseException("User hali ro'yhatdan o'tmagan", 409);
    }
    return {
      message: "success",
      data: findUser,
    };
  }

  async updateUserById(id, data) {
    const findUser = await this.userModel.findById(id);
    if (!findUser) {
      throw new BaseException("User hali ro'yhatdan o'tmagan", 409);
    }
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return updatedUser;
  }
}

export default new UserService();
