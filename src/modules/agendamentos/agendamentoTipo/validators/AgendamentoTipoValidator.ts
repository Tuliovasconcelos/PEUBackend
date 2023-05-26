import { celebrate, Joi, Segments } from 'celebrate';

export const createAgendamentoTipoValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateAgendamentoTipoValidation = celebrate({
  [Segments.PARAMS]: {
    idAgendamentoTipo: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showAgendamentoTipoValidation = celebrate({
  [Segments.PARAMS]: {
    idAgendamentoTipo: Joi.number().integer().required(),
  },
});

export const deleteAgendamentoTipoValidation = celebrate({
  [Segments.PARAMS]: {
    idAgendamentoTipo: Joi.number().integer().required(),
  },
});
