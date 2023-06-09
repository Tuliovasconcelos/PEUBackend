import { celebrate, Joi, Segments } from 'celebrate';

export const createPatologiaValidation = celebrate({
  [Segments.BODY]: {
    descricao: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updatePatologiaValidation = celebrate({
  [Segments.PARAMS]: {
    idPatologia: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    descricao: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showPatologiaValidation = celebrate({
  [Segments.PARAMS]: {
    idPatologia: Joi.number().integer().required(),
  },
});

export const deletePatologiaValidation = celebrate({
  [Segments.PARAMS]: {
    idPatologia: Joi.number().integer().required(),
  },
});
