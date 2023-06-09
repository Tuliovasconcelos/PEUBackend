import { celebrate, Joi, Segments } from 'celebrate';

export const createTipoAgendamentoValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateTipoAgendamentoValidation = celebrate({
  [Segments.PARAMS]: {
    idTipoAgendamento: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showTipoAgendamentoValidation = celebrate({
  [Segments.PARAMS]: {
    idTipoAgendamento: Joi.number().integer().required(),
  },
});

export const deleteTipoAgendamentoValidation = celebrate({
  [Segments.PARAMS]: {
    idTipoAgendamento: Joi.number().integer().required(),
  },
});
