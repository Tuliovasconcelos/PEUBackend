import { celebrate, Joi, Segments } from 'celebrate';

export const createAtendimentoProcedimentoValidation = celebrate({
  [Segments.BODY]: {
    idAtendimento: Joi.number().integer().required(),
    idProcedimento: Joi.number().integer().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateAtendimentoProcedimentoValidation = celebrate({
  [Segments.PARAMS]: {
    idAtendimentoProcedimento: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    idAtendimento: Joi.number().integer(),
    idProcedimento: Joi.number().integer(),
    status: Joi.string().valid('ativo', 'inativo'),
  },
});

export const showAtendimentoProcedimentoValidation = celebrate({
  [Segments.PARAMS]: {
    idAtendimentoProcedimento: Joi.number().integer().required(),
  },
});

export const deleteAtendimentoProcedimentoValidation = celebrate({
  [Segments.PARAMS]: {
    idAtendimentoProcedimento: Joi.number().integer().required(),
  },
});
