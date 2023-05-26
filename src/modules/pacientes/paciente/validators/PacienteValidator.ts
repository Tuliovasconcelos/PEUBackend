import { celebrate, Joi, Segments } from 'celebrate';

export const createPacienteValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    dataNascimento: Joi.date().iso().required(),
    genero: Joi.string().valid('M', 'F', 'O').required(),
  },
});

export const updatePacienteValidation = celebrate({
  [Segments.PARAMS]: {
    idPaciente: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string().required(),
    dataNascimento: Joi.date().iso().required(),
    genero: Joi.string().valid('M', 'F', 'O').required(),
  },
});

export const showPacienteValidation = celebrate({
  [Segments.PARAMS]: {
    idPaciente: Joi.number().integer().required(),
  },
});

export const deletePacienteValidation = celebrate({
  [Segments.PARAMS]: {
    idPaciente: Joi.number().integer().required(),
  },
});
