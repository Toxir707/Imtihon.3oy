import Joi from 'joi';

export const createGroups = Joi.object({
    userId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/) .required(), 
    grname: Joi.string().min(1).max(50).required(),
});

export const updateGroup = Joi.object({
    grname: Joi.string().min(1).max(50).optional(),
});

