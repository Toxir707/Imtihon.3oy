import Joi from 'joi';

export const createGroups = Joi.object({
    userId: Joi.string().required(), 
    grname: Joi.string().min(1).max(50).required(),
});

export const updateGroup = Joi.object({
    grname: Joi.string().min(1).max(50).optional(),
});

