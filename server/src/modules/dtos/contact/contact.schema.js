import Joi from "joi";

export const createContacts = Joi.object({
    userId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    first_name: Joi.string().min(1).max(50).required(),
    phone: Joi.string().min(10).max(15).pattern(/^[0-9]+$/).required(), 
});

export const updateContacts = Joi.object({
    first_name: Joi.string().min(1).max(50).optional(), 
    phone: Joi.string().min(10).max(15).pattern(/^[0-9]+$/) .optional(),
});

