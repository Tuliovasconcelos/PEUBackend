import { celebrate, Segments, Joi } from 'celebrate';

export const createMedicoEspecialidadeValidation = celebrate({
  [Segments.BODY]: {
    medicoId: Joi.number().required(),
    especialidadeId: Joi.number().required(),
  },
});

export const updateMedicoEspecialidadeValidation = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
  [Segments.BODY]: {
    medicoId: Joi.number().optional(),
    especialidadeId: Joi.number().optional(),
  },
});

export const showMedicoEspecialidadeValidation = celebrate({
  [Segments.PARAMS]: {
    idMedicoEspecialidade: Joi.number().required(),
  },
});

export const deleteMedicoEspecialidadeValidation = celebrate({
  [Segments.PARAMS]: {
    idMedicoEspecialidade: Joi.number().required(),
  },
});
