import { celebrate, Joi, Segments } from 'celebrate';

export const createMedicoValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    crm: Joi.string().required(),
    especialidade_id: Joi.number().integer().required(),
  },
});

export const updateMedicoValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    crm: Joi.string().required(),
    especialidade_id: Joi.number().integer().required(),
  },
});

export const showMedicoValidation = celebrate({
  [Segments.PARAMS]: {
    idMedico: Joi.number().integer().required(),
  },
});

export const deleteMedicoValidation = celebrate({
  [Segments.PARAMS]: {
    idMedico: Joi.number().integer().required(),
  },
});
