import { celebrate, Joi, Segments } from 'celebrate';

export const createAgendamentoValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().integer().required(),
    idMedico: Joi.number().integer().required(),
    idClinica: Joi.number().integer().required(),
    idAgendamentoTipo: Joi.number().integer().required(),
    dataAgendamento: Joi.date().iso().required(),
    horaAgendamento: Joi.string().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateAgendamentoValidation = celebrate({
  [Segments.PARAMS]: {
    idAgendamento: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    idPaciente: Joi.number().integer(),
    idMedico: Joi.number().integer(),
    idClinica: Joi.number().integer(),
    idAgendamentoTipo: Joi.number().integer(),
    dataAgendamento: Joi.date().iso(),
    horaAgendamento: Joi.string(),
    status: Joi.string().valid('ativo', 'inativo'),
  },
});

export const showAgendamentoValidation = celebrate({
  [Segments.PARAMS]: {
    idAgendamento: Joi.number().integer().required(),
  },
});

export const deleteAgendamentoValidation = celebrate({
  [Segments.PARAMS]: {
    idAgendamento: Joi.number().integer().required(),
  },
});
