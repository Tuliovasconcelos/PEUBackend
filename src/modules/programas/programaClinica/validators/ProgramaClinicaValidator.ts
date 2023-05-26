import { celebrate, Joi, Segments } from 'celebrate';

export const createProgramaClinicaValidation = celebrate({
  [Segments.BODY]: {
    idPrograma: Joi.number().integer().required(),
    idClinica: Joi.number().integer().required(),
    status: Joi.string().valid('A', 'I').required(),
  },
});

export const updateProgramaClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idProgramaClinica: Joi.number().integer().required(),
  },
  [Segments.BODY]: {
    idPrograma: Joi.number().integer(),
    idClinica: Joi.number().integer(),
    status: Joi.string().valid('A', 'I'),
  },
});

export const showProgramaClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idProgramaClinica: Joi.number().integer().required(),
  },
});

export const deleteProgramaClinicaValidation = celebrate({
  [Segments.PARAMS]: {
    idProgramaClinica: Joi.number().integer().required(),
  },
});
