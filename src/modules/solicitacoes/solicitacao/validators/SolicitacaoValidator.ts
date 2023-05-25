import { celebrate, Joi, Segments } from 'celebrate';

export const createSolicitacaoValidation = celebrate({
  [Segments.BODY]: {
    idPaciente: Joi.number().required(),
    idMedico: Joi.number().required(),
    idClinica: Joi.number().required(),
    dataSolicitacao: Joi.date().required(),
    status: Joi.string().valid('ativo', 'inativo').required(),
  },
});

export const updateSolicitacaoValidation = celebrate({
  [Segments.PARAMS]: {
    idSolicitacao: Joi.number().required(),
  },
  [Segments.BODY]: {
    idPaciente: Joi.number(),
    idMedico: Joi.number(),
    idClinica: Joi.number(),
    dataSolicitacao: Joi.date(),
    status: Joi.string().valid('ativo', 'inativo'),
  },
});

export const showSolicitacaoValidation = celebrate({
  [Segments.PARAMS]: {
    idSolicitacao: Joi.number().required(),
  },
});

export const deleteSolicitacaoValidation = celebrate({
  [Segments.PARAMS]: {
    idSolicitacao: Joi.number().required(),
  },
});
