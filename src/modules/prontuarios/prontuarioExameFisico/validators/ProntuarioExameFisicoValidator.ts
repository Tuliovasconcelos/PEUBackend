import { celebrate, Joi, Segments } from 'celebrate';

export const createProntuarioExameFisicoValidation = celebrate({
  [Segments.BODY]: {
    idProntuario: Joi.number().integer().required(),
    dataRegistro: Joi.date().required(),
    descricao: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateProntuarioExameFisicoValidation = celebrate({
  [Segments.PARAMS]: {
    idExameFisico: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    dataRegistro: Joi.date(),
    descricao: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showProntuarioExameFisicoValidation = celebrate({
  [Segments.PARAMS]: {
    idExameFisico: Joi.number().integer().required(),
  },
});

export const deleteProntuarioExameFisicoValidation = celebrate({
  [Segments.PARAMS]: {
    idExameFisico: Joi.number().integer().required(),
  },
});
