const Joi = require('joi')

module.exports = {
  title: Joi.string().required(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  postCode: Joi.string().max(8).required(),
  date: Joi.string().required(),
  time: Joi.string().required(),
  imageUrl: Joi.string().required(),
  FunActivites: Joi.string().optional(),
  YouthCouncil: Joi.string().optional(),
  Wellness: Joi.string().optional(),
  SportsClubs: Joi.string().optional(),
  YouthGroups: Joi.string().optional(),
  PhysicalHealth: Joi.string().optional(),
  MentalHealth: Joi.string().optional(),
  Volunteering: Joi.string().optional(),
  Outdoors: Joi.string().optional(),
  Cooking: Joi.string().optional(),
  Art: Joi.string().optional(),
  Educational: Joi.string().optional()
}
