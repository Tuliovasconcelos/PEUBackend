import { celebrate, Joi, Segments } from 'celebrate';

export const createProgramaValidation = celebrate({
  [Segments.BODY]: {
    descricao: Joi.string().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateProgramaValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    descricao: Joi.string(),
    status: Joi.string().valid('ativo', 'inativo'),
  },
});

export const showProgramaValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});

export const deleteProgramaValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});
