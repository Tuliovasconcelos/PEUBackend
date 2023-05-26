import { celebrate, Joi, Segments } from 'celebrate';

export const createClinicaValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    endereco: Joi.string().required(),
    telefone: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idClinica: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string(),
    endereco: Joi.string(),
    telefone: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idClinica: Joi.number().integer().required(),
  },
});

export const deleteClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idClinica: Joi.number().integer().required(),
  },
});
