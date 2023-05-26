import { celebrate, Joi, Segments } from 'celebrate';

export const createProntuarioHabitoVidaValidation = celebrate({
  [Segments.BODY]: {
    idProntuario: Joi.number().integer().required(),
    dataRegistro: Joi.date().required(),
    descricao: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateProntuarioHabitoVidaValidation = celebrate({
  [Segments.PARAMS]: {
    idHabitoVida: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    dataRegistro: Joi.date(),
    descricao: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showProntuarioHabitoVidaValidation = celebrate({
  [Segments.PARAMS]: {
    idHabitoVida: Joi.number().integer().required(),
  },
});

export const deleteProntuarioHabitoVidaValidation = celebrate({
  [Segments.PARAMS]: {
    idHabitoVida: Joi.number().integer().required(),
  },
});
