import { celebrate, Joi, Segments } from 'celebrate';

export const createProntuarioHistoricoSaudeValidation = celebrate({
  [Segments.BODY]: {
    idProntuario: Joi.number().integer().required(),
    dataRegistro: Joi.date().iso().required(),
    descricao: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateProntuarioHistoricoSaudeValidation = celebrate({
  [Segments.PARAMS]: {
    idProntuarioHistoricoSaude: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    idProntuario: Joi.number().integer(),
    dataRegistro: Joi.date().iso(),
    descricao: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showProntuarioHistoricoSaudeValidation = celebrate({
  [Segments.PARAMS]: {
    idProntuarioHistoricoSaude: Joi.number().integer().required(),
  },
});

export const deleteProntuarioHistoricoSaudeValidation = celebrate({
  [Segments.PARAMS]: {
    idProntuarioHistoricoSaude: Joi.number().integer().required(),
  },
});
