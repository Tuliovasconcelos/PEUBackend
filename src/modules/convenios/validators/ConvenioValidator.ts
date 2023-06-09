import { celebrate, Joi, Segments } from 'celebrate';

export const createConvenioValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateConvenioValidation = celebrate({
  [Segments.PARAMS]: {
    idConvenio: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showConvenioValidation = celebrate({
  [Segments.PARAMS]: {
    idConvenio: Joi.number().integer().required(),
  },
});

export const deleteConvenioValidation = celebrate({
  [Segments.PARAMS]: {
    idConvenio: Joi.number().integer().required(),
  },
});
