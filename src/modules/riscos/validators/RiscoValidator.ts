import { celebrate, Joi, Segments } from 'celebrate';

export const createRiscoValidation = celebrate({
  [Segments.BODY]: {
    descricao: Joi.string().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateRiscoValidation = celebrate({
  [Segments.PARAMS]: {
    idRisco: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    descricao: Joi.string(),
    status: Joi.string().valid('ativo', 'inativo'),
  },
});

export const showRiscoValidation = celebrate({
  [Segments.PARAMS]: {
    idRisco: Joi.number().integer().required(),
  },
});

export const deleteRiscoValidation = celebrate({
  [Segments.PARAMS]: {
    idRisco: Joi.number().integer().required(),
  },
});
