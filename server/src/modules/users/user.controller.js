import { registerUser, loginUser } from "../dtos/user/user.schema.js";
import jwt from "jsonwebtoken";
import userService from "./user.service.js";
import {
    ACCESS_TOKEN_EXPIRE_TIME,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRE_TIME,
    REFRESH_TOKEN_SECRET,
  } from "../../config/jwt.config.js";
import { BaseException } from "../../exception/base.exception.js";

export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await userService.findUserById(id);
  res.send({
    message: "success",
    data: user
});
};

export const getAllUser = async (req , res) => {
  const user = await userService.getAllUser();
  res.send({
    message: "success",
    data: user
});
};

export const register = async (req, res) => {
  const { error, value } = registerUser.validate(req.body);
  
  if (error) {
    throw new BaseException(error.message,400);
  }
  // const file = req.file;
  // const imageUrl = `/uploads/${file.mimetype.split("/")[0]}/${file.filename}`

  const newUser = await userService.registerUsers(req.body);
  const payload = { id: newUser.id }
  
  const accessToken = jwt.sign(
    payload,
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRE_TIME,
    }
  );
  const refreshToken = jwt.sign(
    payload,
    REFRESH_TOKEN_SECRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRE_TIME,
    }
  );
  res.cookie("accessToken", accessToken, {
    maxAge: +ACCESS_TOKEN_EXPIRE_TIME * 1000,
    httpOnly: true,
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: +REFRESH_TOKEN_EXPIRE_TIME * 1000,
    httpOnly: true,
  });
  
  res.cookie("user", JSON.stringify(newUser));
  const data = { newUser, tokens: {accessToken, refreshToken }}
  res.status(201).send({
    message: "Yaratildi",
    data: newUser,
    accessToken,
    refreshToken
  });
};

export const login = async (req,res) => {
  const {error, value} = loginUser.validate(req.body)

  if (error) {
    throw new BaseException(error.message,400);
  }

  const user = await userService.loginUsers(req.body)

  const accessToken = jwt.sign(
    { id: user.id },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRE_TIME,
    }
  );
  const refreshToken = jwt.sign(
    { id: user.id },
    REFRESH_TOKEN_SECRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRE_TIME,
    }
  );

  res.cookie("accessToken", accessToken, {
    maxAge: +ACCESS_TOKEN_EXPIRE_TIME * 1000,
    httpOnly: true,
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: +REFRESH_TOKEN_EXPIRE_TIME * 1000,
    httpOnly: true,
  });

  const data = {user, tokens: {accessToken, refreshToken}}

  res.cookie("user", JSON.stringify(user));
  res.send({
    message: "success",
    data: user,
  })
}

export const deleteUser = async (req, res) => {
  const id = req.params.id; 
  const user = await userService.deleteUserById(id);
  res.send(user);
};

export const updateUser=async (req,res) => {
  const id = req.params.id; 
  const { email, name } = req.body
  const user = await userService.updateUserById(id, { email, name });
  res.send({
    message:"succes",
    updatedUser:user
  });
}