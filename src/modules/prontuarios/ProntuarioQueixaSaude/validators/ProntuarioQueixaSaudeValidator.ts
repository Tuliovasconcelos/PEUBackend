import { celebrate, Joi, Segments } from 'celebrate';

export const createProntuarioQueixaSaudeValidation = celebrate({
  [Segments.BODY]: {
    idProntuario: Joi.number().integer().required(),
    dataRegistro: Joi.date().required(),
    descricao: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateProntuarioQueixaSaudeValidation = celebrate({
  [Segments.PARAMS]: {
    idQueixaSaude: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    dataRegistro: Joi.date(),
    descricao: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showProntuarioQueixaSaudeValidation = celebrate({
  [Segments.PARAMS]: {
    idQueixaSaude: Joi.number().integer().required(),
  },
});

export const deleteProntuarioQueixaSaudeValidation = celebrate({
  [Segments.PARAMS]: {
    idQueixaSaude: Joi.number().integer().required(),
  },
});
