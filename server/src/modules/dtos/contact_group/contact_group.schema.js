import Joi from 'joi';

export const createContactGroups = Joi.object({
    contactId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(), 
    groupId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(), 
});

export const updateContactGroups = Joi.object({
    contactId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/) .optional(), 
    groupId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).optional(),
});
