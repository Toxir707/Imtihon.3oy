import { config } from "dotenv";

config()

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET
export const ACCESS_TOKEN_EXPIRE_TIME = process.env.ACCESS_TOKEN_EXPIRE_TIME

export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
export const REFRESH_TOKEN_EXPIRE_TIME = process.env.REFRESH_TOKEN_EXPIRE_TIME

// console.log("ACCESS_TOKEN_SECRET:", ACCESS_TOKEN_SECRET);
// console.log("REFRESH_TOKEN_SECRET:", REFRESH_TOKEN_SECRET);
