import { celebrate, Joi, Segments } from 'celebrate';

export const createEspecialidadeValidation = celebrate({
  [Segments.BODY]: {
    nome: Joi.string().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateEspecialidadeValidation = celebrate({
  [Segments.PARAMS]: {
    idEspecialidade: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    nome: Joi.string(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showEspecialidadeValidation = celebrate({
  [Segments.PARAMS]: {
    idEspecialidade: Joi.number().integer().required(),
  },
});

export const deleteEspecialidadeValidation = celebrate({
  [Segments.PARAMS]: {
    iidEspecialidaded: Joi.number().integer().required(),
  },
});
