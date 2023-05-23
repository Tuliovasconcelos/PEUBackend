import { celebrate, Joi, Segments } from 'celebrate';

export const createProcedimentoValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateProcedimentoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string(),
    status: Joi.string().valid('ativo', 'inativo'),
  },
});

export const showProcedimentoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});

export const deleteProcedimentoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});
