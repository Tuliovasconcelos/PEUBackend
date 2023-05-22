import { celebrate, Joi, Segments } from 'celebrate';

export const createProntuarioValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().integer().required(),
  },
});

export const updateProntuarioValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    idPaciente: Joi.number().integer(),
  },
});

export const showProntuarioValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});

export const deleteProntuarioValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});
