import { celebrate, Joi, Segments } from 'celebrate';

export const createAtendimentoValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().integer().required(),
    idMedico: Joi.number().integer().required(),
    idProntuario: Joi.number().integer().required(),
    idClinica: Joi.number().integer().required(),
    idTipoAgendamento: Joi.number().integer().required(),
    idPrograma: Joi.number().integer().required(),
    dataAtendimento: Joi.date().required(),
    horaAtendimento: Joi.string().required(),
    conclusao: Joi.string().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateAtendimentoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    idPaciente: Joi.number().integer(),
    idMedico: Joi.number().integer(),
    idProntuario: Joi.number().integer(),
    idClinica: Joi.number().integer(),
    idTipoAgendamento: Joi.number().integer(),
    idPrograma: Joi.number().integer(),
    dataAtendimento: Joi.date(),
    horaAtendimento: Joi.string(),
    conclusao: Joi.string(),
    status: Joi.string().valid('ativo', 'inativo'),
  },
});

export const showAtendimentoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});

export const deleteAtendimentoValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().integer().required(),
  },
});
