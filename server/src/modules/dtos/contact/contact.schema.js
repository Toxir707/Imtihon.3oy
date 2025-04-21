import Joi from "joi";

export const createContacts = Joi.object({
    userId: Joi.string().required(),
    first_name: Joi.string().min(1).max(50).required(),
    phone: Joi.string().min(10).max(15).required(), 
});

export const updateContacts = Joi.object({
    first_name: Joi.string().min(1).max(50).optional(), 
    phone: Joi.string().min(10).max(15).optional(),
});

